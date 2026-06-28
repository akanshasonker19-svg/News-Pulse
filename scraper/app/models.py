from typing import Optional

from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Text, DateTime


class Base(DeclarativeBase):
    pass


class Article(Base):
    __tablename__ = "articles"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(500))
    summary: Mapped[str] = mapped_column(Text)
    body: Mapped[str] = mapped_column(Text)
    source: Mapped[str] = mapped_column(String(100))
    link: Mapped[str] = mapped_column(String(1000), unique=True)
    published: Mapped[str] = mapped_column(String(100))

    cluster_id: Mapped[int] = mapped_column(nullable=True)
    cluster_id: Mapped[Optional[int]] = mapped_column(nullable=True)
    cluster_id: Mapped[Optional[int]] = mapped_column(nullable=True)