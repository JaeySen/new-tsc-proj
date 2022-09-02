interface usStudent {
    readonly Id: number;
    name: string;
    age?: number;
    phoneNum: string;
}

interface itecStudent {
    readonly id: number;
    name: string;
    age?: number;
    phoneNum: string;
}

interface Identity {
    id: string;
    name: string;
}
interface Contact {
    email: string; 
    phone: string;
}

type autStudent = usStudent & itecStudent


