class Contact {
  userId: string;
  id: number;
  title: string;
  body: string;
  constructor(userId: string, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
export default Contact;
