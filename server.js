const express = require("express");
const helloWorldController = require("./controllers/helloWorld");
//import express from "express";
const settings = require("./settings.json");
const path = require("path");

const api = require("./routes/api");

const hostname = settings.hostname;
const port = settings.port;

const app = express();

app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/api/v1", api);

app.get("/", helloWorldController);

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("/hello", (req, res) => {
  res.json({ ok: true, cool: true });
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.get("/params/:id", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});
app.get("/multiple-params/:id/:second/:third", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

app.listen(port, hostname, () => {
  console.log("Success, server is running");
  console.log(`http://${hostname}:${port}`);
});
