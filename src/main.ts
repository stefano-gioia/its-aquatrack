let logs: any[] = [];

const saveBtn = document.getElementById('saveBtn');

saveBtn?.addEventListener('click', () => {    
    const user = (document.getElementById('user') as HTMLInputElement).value;
    const liters = (document.getElementById('liters') as HTMLInputElement).value;
    const type = (document.getElementById('type') as HTMLSelectElement).value;

    const entry = {
        user: user,
        liters: liters, 
        type: type
    };

    logs.push(entry);
    updateUI();
});

function updateUI() {
    const list = document.getElementById('list');
    
    if (list) {        
        list.innerHTML = ''; 

        for (let i = 0; i < logs.length; i++) {
            const item = logs[i];
            const total = item.liters * 0.02; 

            const row = `<tr>
                <td>${item.user}</td>
                <td>${total.toFixed(2)}</td>
            </tr>`;
            
            list.innerHTML += row;
        }
    }
}