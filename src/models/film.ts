import mongoose, { Schema, Document } from "mongoose";

export interface ILanguage {
  name: string;
  active?: boolean;
}

export interface IFilm {
  title: string;
  description: string;
  release_yar: string;
  language_id: ILanguage;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: number;
  features: string;
  fulltext: string;
}
