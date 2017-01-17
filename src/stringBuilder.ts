class stringProcessor{
    private data: string;
    constructor(input: string){
        //input = data;
        this.data = input;
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        let chars: string[] = this.data.split('');
        for(var i = 0; i< (chars.length-1)/2 ; i++){
            let cTmp:string = chars[i];
            chars[i] = chars[chars.length-1-i];
            chars[chars.length-1-i] = cTmp;
        }
        this.data = chars.join('');
    }
}