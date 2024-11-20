export class Validate {
    static email(mail: string){
        const validDomain = 'gmail.com';
        const emailDomain = mail.split('@')[1];
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
            return true;
        }
        return false;
    }

    static password = (val: string) =>{
        if(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9,}$/.test(val)){
            return true;
        }
        return false;
    }
}