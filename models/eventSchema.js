class Event {
  constructor(name, description, date) {
    this.id = new Date().toString(),
    this.name = name;
    this.description = description;
    this.date = date;
  }
}

export default Event