

const myButton = document.querySelector("#my-button");

const body = document.querySelector("#body")

// 注册点击事件处理程序
myButton.addEventListener('click', function(event) {
    alert('Button was clicked!');
    console.log('Button clicked', event);

    body.lastElementChild.insertAdjacentHTML("afterend", `
            <div>${Math.random()}</div>
        `)
});
