function Anagram(){
    input1=input("Enter anything")
    input2=input("Enter anything")
    i=0
    while i < len(input1){
        if len(input1)==len(input2){
            console.log("Yes")
            break
        }
        else{
             console.log("No")
        }
    }
    i++
Anagram()
}









//  Input1=input("Enter anything:")
//     Input2=input("Enter anything:")
//     i=0
//     while i < len(Input1):
//         if len(Input1) == len(Input2):
//             if Input1[i] in Input2:
//                 print("YES")
//                 break
//             else:
//                 print("NO")
//                 break
//         i=i+1
// Anagram()
    