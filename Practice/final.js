let grade = document.getElementById('grade');

grade.onmouseenter = function() {
    grade.style.color = "#f4f4f4";
};

grade.onmouseleave = function() {
    grade.style.color = "#000000";
};

grade.ondblclick = function(){
    grade.classList.add('hidden');
    let sentence = document.getElementById('sentence');
    sentence.classList.add('hidden');
    let end = document.getElementById('end');
    end.classList.remove('hidden');
};