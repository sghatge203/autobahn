class Contact {
  userId: string;
  id: string;
  title: string;
  component: string;
  constructor(userId: string, id: string, title: string, component: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.component = component;
  }
}
export default Contact;
