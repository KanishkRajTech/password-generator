const Rang = document.getElementById("range");
const RangValue = document.getElementById("rangeValue");
const PassBook = document.getElementById("passbook");
const LowerCase = document.getElementById("lowercase");
const UpperCase = document.getElementById("uppercase");
const NumCase = document.getElementById("numbercase");
const SymboleCase = document.getElementById("symbolecase");
const GenBtn = document.getElementById("genbtn");
const Copy = document.getElementById("copy");

RangValue.textContent = range.value;
range.addEventListener('input',()=>{
    RangValue.textContent = range.value;
})

GenBtn.addEventListener('click',()=>{
    PassBook.value=GeneratePassword();
})
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefhghiklmnopqrstuvwxyz";
let numbercase="1234567890";
let symboleCase="~!@#$%^&*+=";
function GeneratePassword(){
    let GenPassword="";
    let AllChar="";
    AllChar += LowerCase.checked ? lowercase : "";
    AllChar += UpperCase.checked ? uppercase : "";
    AllChar += NumCase.checked ? numbercase : "";
    AllChar += SymboleCase.checked ? symboleCase : "";

    if(AllChar=="" || AllChar.length==0){
        return GenPassword;
    }

    let i=1;
    while(i<=Rang.value){
        GenPassword+=AllChar.charAt(Math.floor(Math.random()*AllChar.length));
        i++;
    }
    return GenPassword;
}
Copy.addEventListener('click',()=>{
    if(PassBook.value !="" || PassBook.value.length >= 1){
        navigator.clipboard.writeText(PassBook.value);
        // Copy.innerText="check";
        Copy.title="Password Copy";
        setTimeout(()=>{
            Copy.title="";
        },3000)
    }
});