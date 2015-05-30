var transforms = ['step1', 'step2', 'step3', 'step4'];
var current = 0;
window.onload = function () {
    console.log('szb');
    var mask = document.getElementById('mask');
    document.getElementById('change').addEventListener('click', function () {
        mask.classList.remove(transforms[current++]);
        if (current > transforms.length - 1) current = 0;
        mask.classList.add(transforms[current]);
    });
};
