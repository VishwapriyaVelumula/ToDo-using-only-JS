let tasks=[];

while(true){
    let task = prompt("Enter your choice:");
    if(task=="list"){
        console.log("------------");
        for(let i=0; i<tasks.length; i++){
            console.log(tasks[i] );
        }
        console.log("------------");
    }
    else if(task=="add"){
        let work=prompt("Enter your task to add:");
        tasks.push(work);
    }
    else if(task=="delete"){
        let ind=prompt("Enter the index you want you to delete:");
        tasks.splice(ind, 1);
    }
    else if(task=="quit"){
        console.log("Quitting the app");
        break;
    }
    else {
         prompt("Invalid Choice!");
    }
}