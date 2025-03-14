var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Thông tin cá nhân";
	$scope.updateInfo = "Sinh nhật : 04/12/2007007";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Sở thích - Trạng thái";
	$scope.job1 = "- Xem mấy bộ anime mới  ";
	$scope.job2 = "- Chưa có người yêu và đang tìm kiếm đối tượng";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "Facebook :https://www.facebook.com/thanh.tranxuan.3158652/";
	$scope.contact2 = "Email: thanhmeogme123thanhmeogme123@gmail.com";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu bạn muốn biết thêm gì về mình liên hện mình nhénhé";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/thanh.tranxuan.3158652//";
	$scope.linkzl = "";
	$scope.linksc = "";
	$scope.linkgm = "thanhmeogme123thanhmeogme123@gmail.com";
	$scope.phonenumber = "03853270495327049 - Viettell";
	$scope.email = "thanhmeogme123thanhmeogme123@gmail.com";
	$scope.title2 = "Hành trình của tôi";
	$scope.contentStory1 = "- Chào các bạn mình tên là Thanhhanh , Học sinh trường trung học phổ thông Trị An , Sinh ra và lớn lên tại mảnh đất Đồng Nai";
	$scope.contentStory2 = "- Cố gắng trong học tập để thi vào được trường mình yêu thích , ra trường có công việc làm ổn định !";
	$scope.storytitle1 = "Thông tin cá nhân";
	$scope.storytitle2 = "Lời hứa của tôi với bản thân và gia đình ";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã quan tâm";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});