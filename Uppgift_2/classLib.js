export class ContactPerson {
        constructor(date, name, email, comment) {
            this.date = date;
            this.name = name;
            this.email = email;
            this.comment = comment;
        }

        confirmText() {
             window.confirm("Are you really really sure???\n\n" +
                 this.date + "\n-------------------\n" +
                 this.name + "\n-------------------\n" +
                 this.email + "\n-------------------\n" +
                 this.comment + "\n-------------------\n"
             );
         }
    }