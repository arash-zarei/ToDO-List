window.addEventListener('load' , ()=>{
    const list_items = document.querySelector('.list-items');
    const submit = document.querySelector('.sub')
    const textValue = document.querySelector('.added__text');
    const valueRang = document.querySelector('.value');
    const rangValue = document.querySelector('.rangValue');
    document.querySelector('.added__text').value = '';
    let arr = [];

    submit.addEventListener('click',()=>{
        const valueIn = textValue.value;
        
        if(!valueIn){
            alert('input is not value')
            return;
        }
        
        const item = document.createElement('div');
        item.classList.add('item')
        list_items.appendChild(item);
    
        const input_checkbox = document.createElement('input');
        input_checkbox.type = 'checkbox';
        input_checkbox.classList.add('checkbox');
        item.appendChild(input_checkbox)

        const input_text = document.createElement('input');
        input_text.type = 'text';
        input_text.value = valueIn;
        input_text.setAttribute('readonly' , 'readonly');
        item.appendChild(input_text);

        const span_remove = document.createElement('span');
        span_remove.classList.add('remove')
        item.appendChild(span_remove);
        
        const i_remove = document.createElement('i');
        i_remove.className = 'fa fa-remove';
        span_remove.appendChild(i_remove)

        
        const span_edit = document.createElement('span');
        span_edit.classList.add('edit');
        item.appendChild(span_edit);

        const i_edit = document.createElement('i');
        i_edit.className = 'fa fa-edit';
        span_edit.appendChild(i_edit);


        span_remove.addEventListener('click' , ()=>{

        if (!span_remove.parentElement.firstChild.checked){
            const total_item = list_items.children.length;
            const totalMInus = list_items.children.length - 1;
            if(totalMInus == arr.length){
                valueRang.style.width = '100%';
                rangValue.innerHTML = '100%';
                item.remove()
                return;
            }
            const math = Math.floor((arr.length / total_item) * 100);
            valueRang.style.width = math + '%';
            rangValue.innerHTML = math + '%';
        }else{
            arr.pop();
            const total_item = list_items.children.length - 1;
            const math = Math.floor((arr.length / total_item) * 100);
            valueRang.style.width = math + '%';
            rangValue.innerHTML = math + '%'
        }
        item.remove()
        arr.pop.length + 1;
        })

        const total_item = list_items.children.length + 1;
        const math = Math.floor((arr.length / total_item) * 100);
        valueRang.style.width = math + '%';
        rangValue.innerHTML = math + '%'

        span_edit.addEventListener('click' , ()=>{
            if(input_text.getAttribute('readonly')){
                input_text.removeAttribute('readonly');
                input_text.style.color = 'red'
                input_text.focus();
                i_edit.className = 'fa fa-check'
            }else{
                input_text.setAttribute('readonly' , 'readonly');
                i_edit.className = 'fa fa-edit';
                input_text.style.color = 'black';
            }
        })


        input_checkbox.addEventListener('click' , ()=>{
            if (input_checkbox.checked) {
                item.style.boxShadow = 'none';
                input_text.style.color = 'gray';
                span_edit.style.boxShadow = 'none'
                span_remove.style.boxShadow = 'none'
            }else{
                item.style.boxShadow = '9px 9px 17px #989898'
                input_text.style.color = 'black';
                span_edit.style.boxShadow = ' 5px 5px 9px #989898, -5px -5px 9px #ffffff'
                span_remove.style.boxShadow = ' 5px 5px 9px #989898, -5px -5px 9px #ffffff'
            }

            rangChanger();
            
        })

function rangChanger(){
    const total_item = list_items.children.length;
            
    if(input_checkbox.checked === true){
        arr.push(input_checkbox.checked);
        const math = Math.floor((arr.length / total_item) * 100);
        valueRang.style.width = math + '%';
        rangValue.innerHTML = math + '%';
    }else{
        arr.pop();

        const math = Math.floor((arr.length / total_item) * 100);
        valueRang.style.width = math + '%';
        rangValue.innerHTML = math + '%';
    }
}

        document.querySelector('.added__text').value = '';
        
    })

})