/**
 * Created by Administrator on 2017/2/22.
 */
var user = {

    insert:'INSERT INTO news (title, content, title_img) VALUES ( ?, ?, ?)',

    update:'update news set title=?, content=?, title_img=? where id=?',
    update_m:'update news set title=?, content=? where id=?',

    update_click:'update news set click=click+1 where id=?',

    delete: 'delete from news where id=?',

    queryById: 'select * from news where id=?',

    queryAll: 'select * from news'
};

module.exports = user;