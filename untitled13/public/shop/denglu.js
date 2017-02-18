/**
 * Created by Administrator on 2016/12/13.
 */

(
    function () {
        $(function () {
            init();

        });
        function init() {
            $('#nio').submit(function () {
                $.post('http://192.168.1.110:3000/login',$(this).serialize(),function (data) {
                    if(data.code==0){
                        location.href='index.html';
                    }
                });
                return false;
            })
        }
    }
)();

