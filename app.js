// HTML elementlerini seçiyoruz
const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');

// Butona tıklama olayını dinliyoruz
button.addEventListener('click', go);

function go() {
    if (input.value !== "") {
        // Yeni paragraf öğesi oluşturuyoruz
        var paragraf = document.createElement('p');
        
        // Bitiş düğmesini oluşturuyoruz
        var finishButton = document.createElement('input');
        finishButton.type = 'checkbox';
        finishButton.classList.add('finishButton'); // Bitiş düğmesi sınıfını ekliyoruz

        // Silme düğmesini oluşturuyoruz
        var deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = 'X';
        
        // Kullanıcının girdisini paragrafa ekliyoruz
        paragraf.innerText = input.value;
        
        // Paragrafı içerik bölmesine ekliyoruz
        contentDiv.appendChild(paragraf);
        
        // Düğmeleri paragrafa ekliyoruz
        paragraf.appendChild(finishButton);
        paragraf.appendChild(deleteButton);
        
        // Input alanını temizliyoruz
        input.value = "";

        // Silme düğmesine tıklama olayını ekliyoruz
        deleteButton.addEventListener('click', function() {
            contentDiv.removeChild(paragraf);
        });
        
        // Bitiş düğmesine tıklama olayını ekliyoruz
        finishButton.addEventListener('click', function() {
            paragraf.classList.toggle('deneme');
        });
    }
}