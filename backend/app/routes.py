from fastapi import APIRouter, HTTPException
from typing import List
from models import Item
from db import fake_db

router = APIRouter()

@router.get("/", response_model=List[Item])
def read_root():
    return fake_db

@router.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int):
    item = next((item for item in fake_db if item["id"] == item_id), None)
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.post("/items/", response_model=Item)
def create_item(item: Item):
    if any(existing_item["id"] == item.id for existing_item in fake_db):
        raise HTTPException(status_code=400, detail="Item with this ID already exists")
    fake_db.append(item.dict())
    return item

@router.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for idx, existing_item in enumerate(fake_db):
        if existing_item["id"] == item_id:
            fake_db[idx] = updated_item.dict()
            return updated_item
    raise HTTPException(status_code=404, detail="Item not found")

@router.delete("/items/{item_id}", response_model=dict)
def delete_item(item_id: int):
    global fake_db
    fake_db = [item for item in fake_db if item["id"] != item_id]
    return {"message": "Item deleted"}
