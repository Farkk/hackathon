import requests
from bs4 import BeautifulSoup
import json
import os

# URL страницы с карточками
url = "https://ametist-vlad.com/catalog/kleevye-materialy/"

# Загружаем страницу
response = requests.get(url)
response.raise_for_status()  # Проверяем статус ответа

# Парсим HTML
soup = BeautifulSoup(response.text, "html.parser")

# Находим все карточки товаров
cards = soup.find_all("div", class_="card")

# Папка для сохранения файлов
output_dir = "output_json"
os.makedirs(output_dir, exist_ok=True)

# Обработка каждой карточки
for index, card in enumerate(cards, 1):
    # Извлечение заголовка
    title = card.find("div", class_="card__title").text.strip()

    # Извлечение ссылки на изображение
    image_src = card.find("div", class_="card__img-block")["data-src"]

    # Извлечение текстовых блоков
    data = {
        "Название": title,
        "Изображение": image_src,
        "Артикул основы": "",
        "Ширина": "",
        "Длина рулона": "",
        "Состав": {},
        "Дублирование": {},
        "Уход": [],
        "Применение": {}
    }

    # Обрабатываем строки с данными
    rows = card.find_all("div", class_="card__text-row")
    current_section = None

    for row in rows:
        label = row.find("div", class_="card__text-item").text.strip().rstrip(":")
        value = row.find("div", class_="card__text-item_second")
        value = value.text.strip() if value else ""

        # Заполнение общих данных
        if label == "Артикул основы":
            data["Артикул основы"] = value
        elif label == "Ширина":
            data["Ширина"] = value
        elif label == "Длина рулона":
            data["Длина рулона"] = value
        # Определяем, в какой раздел должны быть добавлены данные
        elif label == "Состав":
            current_section = "Состав"
        elif label == "Дублирование":
            current_section = "Дублирование"
        elif label == "Уход":
            current_section = "Уход"
        elif label == "Применение":
            current_section = "Применение"

        # Заполнение данных по секциям
        if current_section == "Состав":
            if label != "Состав":  # Исключаем пустую строку
                data["Состав"][label] = value
        elif current_section == "Дублирование":
            if label != "Дублирование":  # Исключаем пустую строку
                data["Дублирование"][label] = value
        elif current_section == "Уход":
            first_item = row.find("div", class_="card__text-item").text.strip()
            if first_item and first_item != "Уход:" and first_item not in data["Уход"]:
                data["Уход"].append(first_item)
        elif current_section == "Применение":
            if label != "Применение" and value:  # Исключаем пустую строку
                data["Применение"][label] = value

    # Генерация уникального имени файла для каждой карточки
    filename = os.path.join(output_dir, f"card_{index}.json")

    # Сохраняем данные в JSON
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

    print(f"Данные карточки '{title}' сохранены в {filename}")

print("Обработка всех карточек завершена.")
