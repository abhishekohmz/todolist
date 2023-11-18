function Click(){

    if(inp.value == ''){

        alert('Please add tasks')
    }
    else{
        const add=document.getElementById('inp').value 
        var parent=document.getElementById('div2');
     
     var newdiv1=document.createElement('div');
     newdiv1.textContent=add
     newdiv1.style.width='600px'
     newdiv1.style.marginLeft='13%'
     newdiv1.style.borderStyle='groove'
     newdiv1.style.boxShadow='0 0 5px black'
     newdiv1.style.marginBottom='2px'
     newdiv1.style.marginTop='10px'
     newdiv1.style.paddingTop='10px'
     newdiv1.style.paddingLeft='10px'
     newdiv1.style.borderRadius='20px'

     var newdiv2=document.createElement('div');
     newdiv2.style.marginTop='2%'
     newdiv2.style.marginRight='2%'
     
     var btn=document.createElement('button');
     btn.innerHTML=`<i class="fa-solid fa-trash" style="color: #005eff;"></i>`;
     btn.style.float='right'
     btn.style.marginTop='-6%'
     btn.style.border='none'
     btn.style.borderRadius='10px'
     btn.style.width='50px'
     btn.style.boxShadow='0 0 8px red'
     
     
     var edit=document.createElement('button')
     edit.innerHTML=`<i class="fa-solid fa-pencil" style="color: #005eff;"></i>`
     edit.style.float='right'
     edit.style.marginTop='-6%'
     edit.style.marginRight='10%'
     edit.style.border='none'
     edit.style.borderRadius='10px'
     edit.style.width='50px'
     edit.style.boxShadow='0 0 8px green'
     
     
     
     parent.appendChild(newdiv1)
     newdiv1.appendChild(newdiv2)
     newdiv2.appendChild(btn)
     newdiv2.appendChild(edit)
     
     edit.onclick=function(){
         const prmpt=prompt('Enter the update')
         newdiv1.textContent=prmpt
         newdiv1.appendChild(newdiv2)
         newdiv2.appendChild(edit)
     }
     btn.onclick=function(){
         newdiv1.parentNode.removeChild(newdiv1)
     }
     
     
     
     function clear(){
         inp.value=''
     }
     clear()
    }
   
}