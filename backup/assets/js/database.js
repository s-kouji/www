/*=====================
	ポスト
	post = {
		id,			//ポストの固有id(ユニークなので重複してはいけない)
		user_id,	//userのid(投稿者)
		title,		//ポストのタイトル
		article,	//ポストの内容
		icon,		//表示するid
		fav,		//ファボされた数
	}
=====================*/


//ダミー
var posts = [
	{
		id:1,
		user_id:1,
		title:"ダミータイトル1",
		article:"ダミーテキストダミーテキストダミーテキストダミーテキスト",
		icon:"http://hoge.com/1.png",
	},
	{
		id:2,
		user_id:1,
		title:"ダミータイトル2",
		article:"ダミーテキストダミーテキストダミーテキストダミーテキスト",
		icon:"http://hoge.com/1.png",
	},
	{
		id:3,
		user_id:2,
		title:"ダミータイトル3",
		article:"ダミーテキストダミーテキストダミーテキストダミーテキスト",
		icon:"http://hoge.com/2.png",
	},
	{
		id:4,
		user_id:2,
		title:"ダミータイトル4",
		article:"ダミーテキストダミーテキストダミーテキストダミーテキスト",
		icon:"http://hoge.com/2.png",
	}
	//........
]





/*=====================
	コメント
	comment = [
		id,			//コメント固有のid(ユニークなので重複してはいけない)
		user_id,	//userのid(投稿者)
		post_id,	//postのid
		comment,	//コメントの内容
		niku,		//肉ポイント
		kusa,		//草ポイント
		pushed,		//肉か草を押したかどうか
	]
=====================*/



//ダミー
var comments = [
	{
		id:1,
		user_id:1,
		post_id:2,
		comment:"ダミーコメント",
		niku:10,
		kusa:0
	},
	{
		id:2,
		user_id:1,
		post_id:2,
		comment:"ダミーコメント２",
		niku:8,
		kusa:20
	},
	{
		id:3,
		user_id:1,
		post_id:2,
		comment:"ダミーコメント３",
		niku:5,
		kusa:1
	}
	//........
]



/*=====================
	ユーザー
	user = {
		id,			//ユーザーの固有id(ユニークなので重複してはいけない)
		mail,		//メール
		pass,		//パス
		icon,		//表示するicon
		name,		//表示名
		niku,		//肉ポイント
		kusa,		//草ポイント
		fav = [		//favした情報
			post_id,//favした投稿(中身に肉か草を判断)
		]
	}
=====================*/




//ダミー
var users = [
	{
		id:1,
		mail:"ex@hoge.com",
		pass:"password",
		icon:"http://hoge.com/1.png",
		name:"三上航人",
		niku:10,
		kusa:10,
		fav:[
			1,
			2,
			3,
			4
		]
	},
	{
		id:2,
		mail:"ex2@hoge.com",
		pass:"password2",
		icon:"http://hoge.com/2.png",
		name:"山田太郎",
		niku:200,
		kusa:20,
		fav:[
			2,
			4
		]
	}
	//........
]