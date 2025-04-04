const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// POST create event
router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    req.io.emit("eventCreated", newEvent); 
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: "Failed to create event" });
  }
});

// DELETE event
router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (deletedEvent) {
      req.io.emit("eventDeleted", req.params.id); 
      res.json({ message: "Event deleted" });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete event" });
  }
});

module.exports = router;
