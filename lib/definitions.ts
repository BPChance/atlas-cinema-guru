// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Topic = {
  id: string;
  title: string;
};

export type Question = {
  id: string;
  title: string;
  topic_id: string;
  votes: number;
};

export type Title = {
  id: string;
  title: string;
  released: number;
  genre: string;
  synopsis: string;
  image: string;
  favorited: boolean;
  watchLater: boolean;
};

export type UsersTitle = Title & {
  image: string;
  favorited: boolean;
  watchLater: boolean;
};
