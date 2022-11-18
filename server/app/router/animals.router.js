import express from "express";
import jwt from "jsonwebtoken";
import { nameRoutes } from "../constants/index.js";
import { verifyToken } from "../middleware/middleware.js";
import ANIMALS from "../data/animalsData.json" assert { type: "json" };

const router = express.Router();

router.get(nameRoutes.DEFAULT, verifyToken, async (request, response) => {
  try {
    jwt.verify(request.token, "secretKey", (err, authData) => {
      if (err) {
        response.status(403).json({ resp: "Invalidated credentials" });
        return;
      }
      response.json(
        ANIMALS.map((animal) => {
          return {
            id: animal.id,
            img: animal.img,
            name: animal.name,
            race: animal.race,
            type: animal.type,
          };
        })
      );
    });
  } catch (error) {
    throw new Error(error);
  }
});

router.get(nameRoutes.DEFAULT_ID, verifyToken, async (request, response) => {
  try {
    jwt.verify(request.token, "secretKey", (err, authData) => {
      if (err) {
        response.status(403).json({ resp: "Invalidated credentials" });
        return;
      }
      const { id } = request.params;
      const animal = ANIMALS.find((pet) => pet.id === id);
      response.status(200).json(animal);
    });
  } catch (error) {
    throw new Error(error);
  }
});

export { router };
