import data from "./data.json" assert { type: "json" };

let list: number[] = [];

data.how.forEach(element => {
  for (let i = 0; i < element.weight; i++){
    list.push(element.id);
  }
});

let choice = data['how'][list[Math.floor(Math.random() * (list.length))]];

var command = document.createElement('div');
if (choice['command'].includes('+')){
  let splited =choice['command'].split('+')
  for (let i=0; i< splited.length; i++){
    const key = document.createElement('kbd')
    key.setAttribute('class', 'kbd')
    key.appendChild(document.createTextNode(splited[i]))
    command.appendChild(key)
    if (i!=splited.length-1){
      command.appendChild(document.createTextNode('+'))
    }
  }
}
else{
  let info = document.createElement('div');
  info.setAttribute('role', 'alert')
  info.appendChild(document.createTextNode(choice['command']))
  command.appendChild(info)
}
document.getElementById('command')!.appendChild(command)

var commandExplained = document.createElement('div');
commandExplained.setAttribute('role', 'alert')
commandExplained.setAttribute('class', 'alert alert-info')
commandExplained.appendChild(document.createTextNode(choice['command_explained']))
document.getElementById('command-explained')!.appendChild(commandExplained)

var safe = document.createElement('div');
safe.setAttribute('role', 'alert');
if (choice['safe']==0){
  safe.setAttribute('class', 'alert alert-success');
  safe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  + choice['safe_info']
}
else if (choice['safe']==1){
  safe.setAttribute('class', 'alert alert-warning');
  safe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
  + choice['safe_info']
}
else if (choice['safe']==2){
  safe.setAttribute('class', 'alert alert-error');
  safe.innerHTML='  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  + choice['safe_info']
}
document.getElementById('safe')!.appendChild(safe)

let btn = document.getElementById("button")!;
btn.addEventListener("click", () =>{
  window.location.reload()
});
