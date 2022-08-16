/**
 * TODO: Giới thiệu một số hàm built-in
 * 1. Alert 
 * 2. Console
 * 3. Confirm: hiện ra một hộp thoại
 * 4. Prompt: hiện ra hộp thoại có ô input nhập vào
 * 5. Set timeout: sau một time quy định thì code sẽ chạy
 * 6. Set interval: sau một time quy định lại chạy tiếp, lặp lại liên tục
 */

//confirm('Xác nhận đủ tuổi?');

//prompt('Xác nhận đủ 18 tuổi?');

// setTimeout(function() {
//     alert('Hello mn :3')
// }, 2000)

setInterval(function() {
    console.log('Hello mn :3' + Math.random())
}, 2000)