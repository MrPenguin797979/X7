window.addEventListener("load", function () {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const datas = [
    {
      Tên: "Phạm Việt Anh",
      "Biệt danh": "Vanh",
      "Ngày sinh": "04/08/2010",
      "Sở thích": "Chơi game, học toán",
      "Môn học yêu thích": "Toán",
      "Trường cấp 3 muốn vô": "LQĐ",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game, học toán, 10đ tất cả các môn",
      Ghét: "Bị chửi, chó",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VietAnh?v=1747748462322",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VietAnh2?v=1747748494219",
    },
    {
      Tên: "Đoàn Quang Đức Bảo",
      "Biệt danh": "7 gao",
      "Ngày sinh": "29/01/2010",
      "Sở thích": "Chơi game, học Anh",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "Chưa xác định được",
      Thích: "Game, Tiếng Anh",
      Ghét: "Công dân, Âm nhạc",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/DucBao?v=1747672764155",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/DucBao2?v=1747672952006",
    },
    {
      Tên: "Nguyễn Huy Bảo",
      "Biệt danh": "Catdebun",
      "Ngày sinh": "20/11/2010",
      "Sở thích": "Xem anime, manga",
      "Môn học yêu thích": "Không có",
      "Trường cấp 3 muốn vô": "PVĐ",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game, xem anime",
      Ghét: "Wibu, Otaku (tự nói mình), xem SPY x Family",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HuyBao?v=1747748664121",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HuyBao2?v=1747748693599",
    },
    {
      Tên: "Nguyễn Bảo Châu",
      "Biệt danh": "Gâu J",
      "Ngày sinh": "05/12/2010",
      "Sở thích": "Đọc truyện, xem phim",
      "Môn học yêu thích": "Lịch sử",
      "Trường cấp 3 muốn vô": "L2T, NVT",
      "Ước mơ": "Chưa xác định được",
      Thích: "OTP, cr mình",
      Ghét: "NOTP, hành",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Chau?v=1747749691164",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Chau2?v=1747750067507",
    },
    {
      Tên: "Mai Hoàng Thuỳ Dương",
      "Biệt danh": "Cún",
      "Ngày sinh": "05/07/2010",
      "Sở thích": "Chơi game, ngủ",
      "Môn học yêu thích": "Ngữ văn",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Văn)",
      "Ước mơ": "Lấy chồng đại gia",
      Thích: "Crush mình, chơi game, bóng rổ",
      Ghét: "Mấy con bò sát, gián",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Duong?v=1747747822412",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Duong2?v=1747747923473",
    },
    {
      Tên: "Cao Minh Đăng",
      "Biệt danh": "Nghiện game",
      "Ngày sinh": "16/06/2010",
      "Sở thích": "Chơi game, xem anime",
      "Môn học yêu thích": "Toán",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Wibu chúa",
      Thích: "Chơi game, anime",
      Ghét: "Anime có animation tệ, gián, gdcd",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dang?v=1747749096350",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dang2?v=1747749173488",
    },
    {
      Tên: "Đoàn Bảo Điền",
      "Biệt danh": "Đồn liền (Chiến đò)",
      "Ngày sinh": "25/01/2010",
      "Sở thích":
        "Bảng điểm full 10🤑, chơi game🤓, chọc bạn 😈( như là chọc bột🍙 ),...",
      "Môn học yêu thích":
        "Lú⚡️(lú thật😟), toán🧮( tuỳ mức độ của bài😤), tiếng anh😋(hơi lag 1 tí😓)",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Lý)",
      "Ước mơ":
        "Được lên bảng vàng💩, top 1 server lú🥲, được huy chương của hkpđ🥇🥇🥇🥇, top 1 bxh game🥺",
      Thích: "Chơi game🥰, chọc bạn😜, đi chơi🤭,..",
      Ghét: "Đang chs game mà bị gank😡, bị chửi😭, gián😨,..",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dien?v=1747751679408",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dien2?v=1747752341607",
    },
    {
      Tên: "Đào Lương Đình",
      "Biệt danh": "Đào Lương Đá",
      "Ngày sinh": "21/01/2010",
      "Sở thích": "Chơi Minecraft, chơi thể thao, học toán",
      "Môn học yêu thích": "Toán học",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Toán)",
      "Ước mơ": "Thi giải toán nào nhất giải đó",
      Thích: "Chơi Minecraft, chơi thể thao, học toán",
      Ghét: "Những thứ bản thân ghét",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dinh?v=1747742289362",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Dinh2?v=1747742314253",
    },
    {
      Tên: "Lê Bùi Vân Hà",
      "Biệt danh": "Bống",
      "Ngày sinh": "23/12/2010",
      "Sở thích": "Chơi game",
      "Môn học yêu thích": "Không có",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "Chưa xác định được",
      Thích: "Childe",
      Ghét: "Học, hành",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VanHa?v=1747669837974",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VanHa2?v=1748014201870",
    },
    {
      Tên: "Nguyễn Đào Khải Hà",
      "Biệt danh": "June",
      "Ngày sinh": "12/06/2010",
      "Sở thích": "Nghe nhạc, chơi thể thao, xem phim",
      "Môn học yêu thích": "Không có",
      "Trường cấp 3 muốn vô": "LQĐ, L2T",
      "Ước mơ": "Chưa xác định được",
      Thích: "Nghe nhạc, chơi thể thao, xem phim",
      Ghét: "Gián, chuột",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/KhaiHa?v=1748007336252",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/KhaiHa2?v=1748007475946",
    },
    {
      Tên: "Trần Minh Hải",
      "Biệt danh": "Hải đá",
      "Ngày sinh": "09/01/2010",
      "Sở thích": "Chơi thể thao",
      "Môn học yêu thích": "Toán học, Hoá học",
      "Trường cấp 3 muốn vô": "LQĐ",
      "Ước mơ": "Làm bộ đội",
      Thích: "Chơi thể thao",
      Ghét: "Ghét những thứ bản thân ghét",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Hai?v=1747755052963",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Hai2?v=1747846934409",
    },
    {
      Tên: "Nguyễn Lê Bảo Hân",
      "Biệt danh": "Su Xin Hao",
      "Ngày sinh": "26/10/2010",
      "Sở thích": "Đọc truyện, vẽ tranh",
      "Môn học yêu thích": "Mĩ thuật, âm nhạc",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Được tới Trùng Khánh",
      Thích: "Đọc truyện, vẽ tranh",
      Ghét: "Ghét sự giả dối, bị bắt ép",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Han?v=1747895740932",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Han2?v=1747895783018",
    },
    {
      Tên: "Phạm Việt Hoàn",
      "Biệt danh": "Bee Bee Quạt",
      "Ngày sinh": "11/06/2010",
      "Sở thích": "Chơi game, Học toán",
      "Môn học yêu thích": "Toán",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Toán)",
      "Ước mơ": "Thủ khoa chuyên Toán",
      Thích: "Toán học",
      Ghét: "Lolicon",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VietHoan?v=1747672601204",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/VietHoan2?v=1747671989000",
    },
    {
      Tên: "Nguyễn Hữu Hoàng",
      "Biệt danh": "nguhaha",
      "Ngày sinh": "18/05/2010",
      "Sở thích": "Chơi game, xem Netflix",
      "Môn học yêu thích": "Hoá học",
      "Trường cấp 3 muốn vô": "LQĐ",
      "Ước mơ": "Bác sĩ",
      Thích: "Đi chơi, lướt mạng xã hội, chơi game, đánh bóng bàn",
      Ghét: "Bị bố mẹ chửi",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Hoang?v=1747846657487",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Hoang2?v=1747846736462",
    },
    {
      Tên: "Nguyễn Thị Thu Hồng",
      "Biệt danh": "Pink Autumn",
      "Ngày sinh": "20/11/2010",
      "Sở thích": "Đọc truyện, nghe nhạc",
      "Môn học yêu thích": "Lý",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Đỗ NV1",
      Thích: "Truyện, nghe nhạc",
      Ghét: "Hoá",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/ThuHong?v=1747673230441",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/ThuHong2?v=1747673166155",
    },
    {
      Tên: "Nguyễn Quang Huy",
      "Biệt danh": "Bột",
      "Ngày sinh": "06/06/2010",
      "Sở thích": "Chơi cầu lông",
      "Môn học yêu thích": "Lý",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Lý)",
      "Ước mơ": "Chưa xác định được",
      Thích: "Đạp xe cùng các bạn, chơi cầu lông",
      Ghét: "Tiểu cường",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Huy?v=1747844686402",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Huy2?v=1747844818004",
    },
    {
      Tên: "Vương Thị Hoài Hương",
      "Biệt danh": "=))",
      "Ngày sinh": "23/06/2010",
      "Sở thích": "Xem TV",
      "Môn học yêu thích": "Toán",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Kế toán",
      Thích: "Xem TV, đánh cầu lông",
      Ghét: "Làm việc nhà",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Huong?v=1747896451208",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Huong2?v=1747896464431",
    },
    {
      Tên: "Hoàng Gia Khang",
      "Biệt danh": "Khôn mặt làng",
      "Ngày sinh": "17/02/2010",
      "Sở thích": "Vẽ, chơi game",
      "Môn học yêu thích": "Mĩ thuật",
      "Trường cấp 3 muốn vô": "PVĐ",
      "Ước mơ": "Chưa xác định được",
      Thích: "Vẽ, chơi game",
      Ghét: "Gián, côn trùng",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Khang?v=1747845073951",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Khang2?v=1747845232380",
    },
    {
      Tên: "Nguyễn Nhật Khoa",
      "Biệt danh": "Kho múp",
      "Ngày sinh": "06/02/2010",
      "Sở thích": "Chơi game, học sinh",
      "Môn học yêu thích": "Sinh học",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Sinh)",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game, học sinh, xem anime",
      Ghét: "Âm nhạc",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Khoa?v=1747743009195",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Khoa2?v=1747743031514",
    },
    {
      Tên: "Trương Đinh Tuấn Kiệt",
      "Biệt danh": "Lặc",
      "Ngày sinh": "",
      "Sở thích": "Nhắn tin với gái",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ",
      "Ước mơ": "Đi nước ngoài",
      Thích: "Đi chơi, nhắn tin với gái",
      Ghét: "Bị kêu là gay",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/TuanKiet?v=1747674295227",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/TuanKiet2?v=1747674416063",
    },
    {
      Tên: "Đỗ Tường Minh",
      "Biệt danh": "Lô",
      "Ngày sinh": "06/05/2010",
      "Sở thích": "Chơi bóng rổ, bóng đá, chơi game",
      "Môn học yêu thích": "Thể dục, Địa",
      "Trường cấp 3 muốn vô": "NVT",
      "Ước mơ": "Chơi bóng rổ chuyên nghiệp hoặc kĩ sư ô tô",
      Thích: "Chơi bóng rổ, bóng đá, chơi game",
      Ghét: "Gián và mấy con côn trùng khác",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/TuongMinh?v=1747845585666",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/TuongMinh2?v=1747847241636",
    },
    {
      Tên: "Hà Dương Uyển Minh",
      "Biệt danh": "Sú",
      "Ngày sinh": "09/08/2010",
      "Sở thích": "Nghe nhạc, bóng rổ, violin",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "Làm vợ tỷ phú, đi du học",
      Thích: "Crush, Lía, taekwondo, du lịch",
      Ghét: "Sự lạnh nhạt của cr, gián, nhện, mấy con nhiều chân",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/UyenMinh?v=1747741732038",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/UyenMinh2?v=1747741752709",
    },
    {
      Tên: "Vũ Đình Hoàng Minh",
      "Biệt danh": "Top 1 Anh",
      "Ngày sinh": "22/04/2010",
      "Sở thích": "Anime 😍😋",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "Giỏi anh top 1 server",
      Thích: "Anime 😍😋, học anh, donut 🍩",
      Ghét: "Điểm thấp 😔😔",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HoangMinh?v=1747846558514",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HoangMinh2?v=1747846570523",
    },
    {
      Tên: "Nguyễn Ngọc Hà My",
      "Biệt danh": "Mu",
      "Ngày sinh": "18/04/2010",
      "Sở thích": "Đi xem phim, Piano",
      "Môn học yêu thích": "Âm nhạc",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Luật sư, cưới chồng giàu",
      Thích: "Tiền, nghe nhạc, xem phim",
      Ghét: "Gián, nhện",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HaMy?v=1747817467628",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HaMy3?v=1747757090833",
    },
    {
      Tên: "Nguyễn Thanh Ngọc",
      "Biệt danh": "Liễu",
      "Ngày sinh": "17/07/2010",
      "Sở thích": "Đọc sách, nghe nhạc, nấu ăn, làm đồ thủ công",
      "Môn học yêu thích": "Ngữ văn, Tiếng Anh, Địa",
      "Trường cấp 3 muốn vô": "Chưa xác định được",
      "Ước mơ": "Chưa xác định được",
      Thích: "Đọc sách, nghe nhạc, nấu ăn, làm đồ thủ công",
      Ghét: "Gián, chuột",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Ngoc?v=1747905701770",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Ngoc2?v=1747905735145",
    },
    {
      Tên: "Nguyễn Hoàng Thảo Nguyên",
      "Biệt danh": "Milk",
      "Ngày sinh": "29/09/2010",
      "Sở thích": "Vẽ",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "NV1, chuyên",
      Thích: "Việt quất",
      Ghét: "Làm bài tập",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nguyen?v=1748007167184",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nguyen?v=1748007167184",
    },
    {
      Tên: "Nguyễn Thành Nhân",
      "Biệt danh": "=))))",
      "Ngày sinh": "25/08/2010",
      "Sở thích": "Chơi game",
      "Môn học yêu thích": "Mĩ thuật",
      "Trường cấp 3 muốn vô": "Chưa xác định được",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game, 10đ sử (HSG)",
      Ghét: "Lỗ, âm nhạc",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhan?v=1747847135793",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhan2?v=1747847172781",
    },
    {
      Tên: "Nguyễn Hà Minh Nhật",
      "Biệt danh": "Trọc",
      "Ngày sinh": "17/08/2010",
      "Sở thích": "Chơi cờ vua, đọc sách",
      "Môn học yêu thích": "Toán, Lý, Hoá",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Lý)",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi cờ vua, đọc sách, nghe nhạc",
      Ghét: "Gián",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhat?v=1747742620174",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhat2?v=1747742653442",
    },
    {
      Tên: "Nguyễn Diệu Nhi",
      "Biệt danh": "Bông",
      "Ngày sinh": "13/01/2010",
      "Sở thích": "Nghe nhạc, xem phim",
      "Môn học yêu thích": "Sử, Văn",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Chưa xác định được",
      Thích: "Nghe nhạc, xem phim, đi chơi",
      Ghét: "Lỗ, gián, mấy con nhiều chân",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhi?v=1747896197962",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Nhi2?v=1747896292106",
    },
    {
      Tên: "Phan Minh Phú",
      "Biệt danh": "=)))))",
      "Ngày sinh": "17/05/2010",
      "Sở thích": "Chơi game",
      "Môn học yêu thích": "Lịch sử",
      "Trường cấp 3 muốn vô": "LQĐ, L2T",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game",
      Ghét: "Bắt làm những gì không thích",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Phu?v=1747838189179",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Phu2?v=1747838225501",
    },
    {
      Tên: "Phan Minh Phúc",
      "Biệt danh": "=)))))",
      "Ngày sinh": "13/08/2010",
      "Sở thích": "Cầu lông (dù hơi gà)",
      "Môn học yêu thích": "Lý",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "Có ny",
      Thích: "Chơi cầu lông, làm màu",
      Ghét: "Mĩ thuật, chó",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Phuc?v=1747838344182",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Phuc?v=1747838344182",
    },
    {
      Tên: "Nguyễn Thái Mai Phương",
      "Biệt danh": "Con nghiện",
      "Ngày sinh": "16/06/2010",
      "Sở thích": "Chơi game",
      "Môn học yêu thích": "Ngữ văn",
      "Trường cấp 3 muốn vô": "Chưa xác định được",
      "Ước mơ": "Thi đỗ cấp 3",
      Thích: "Chơi game, nói chuyện với bạn bè",
      Ghét: "Ghét những thứ bản thân ghét",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/MaiPhuong?v=1747895367294",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/MaiPhuong2?v=1747895437852",
    },
    {
      Tên: "Trịnh Hoàng Lan Phương",
      "Biệt danh": "=))))",
      "Ngày sinh": "10/12/2010",
      "Sở thích": "Xem phim",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "Du học (🍁)",
      Thích: "Jungkook, otp, xem phim",
      Ghét: "Điểm thấp, lỗ",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/LanPhuong?v=1747906214558",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/LanPhuong2?v=1747906230653",
    },
    {
      Tên: "Trần Minh Quang",
      "Biệt danh": "=)))))",
      "Ngày sinh": "24/04/2010",
      "Sở thích": "Chơi game, nghe nhạc, học hoá",
      "Môn học yêu thích": "Hoá",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Hoá), L2T",
      "Ước mơ": "Chưa xác định được",
      Thích: "Chơi game, nghe nhạc, học hoá, tinh thể",
      Ghét: "Gián, mấy con nhiều chân",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Quang?v=1747743228494",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Quang2?v=1747743264314",
    },
    {
      Tên: "Đặng Hoàng Quân",
      "Biệt danh": "Tôm 🦐",
      "Ngày sinh": "28/03/2010",
      "Sở thích": "Cầu lông, Đá bóng, Nghe nhạc",
      "Môn học yêu thích": "Thể dục",
      "Trường cấp 3 muốn vô": "L2T",
      "Ước mơ": "HSXS",
      Thích: "Chơi game, đá bóng, tiền",
      Ghét: "Mấy chỗ đông người, mấy con dài dài",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HoangQuan?v=1747846281121",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HoangQuan2?v=1747846309955",
    },
    {
      Tên: "Lê Minh Quân",
      "Biệt danh": "Hihi",
      "Ngày sinh": "08/11/2010",
      "Sở thích": "Lập trình",
      "Môn học yêu thích": "Tin học",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Tin)",
      "Ước mơ": "Lập trình viên",
      Thích: "Lập trình, Anime",
      Ghét: "Ngữ văn, Hoá học",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/MinhQuan?v=1747846426768",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/MinhQuan2?v=1747846514314",
    },
    {
      Tên: "Phan Vũ Mạnh Quân",
      "Biệt danh": "Ba Sỉn",
      "Ngày sinh": "01/04/2010",
      "Sở thích": "Học hóa",
      "Môn học yêu thích": "Hóa học",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Hóa)",
      "Ước mơ": "Chưa xác định",
      Thích: "Hóa",
      Ghét: "Những điều bản thân ghét",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/ManhQuan?v=1747845974109",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/ManhQuan2?v=1747846006770",
    },
    {
      Tên: "Cao Minh Thành",
      "Biệt danh": "Thànk",
      "Ngày sinh": "29/09/2010",
      "Sở thích": "Cầu lông, chơi game, nghe nhạc",
      "Môn học yêu thích": "Tiếng Anh",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Anh)",
      "Ước mơ": "VĐV Cầu lông chuyên nghiệp",
      Thích: "Vợt cầu lông, nghe nhạc",
      Ghét: "Cầu rách, vợt dởm",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thanh?v=1747847310213",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thanh2?v=1747847318159",
    },
    {
      Tên: "Nguyễn Phương Thảo",
      "Biệt danh": "Thẩu",
      "Ngày sinh": "17/11/2010",
      "Sở thích": "Nấu ăn, dọn dẹp nhà",
      "Môn học yêu thích": "Ngữ văn",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Văn), L2T",
      "Ước mơ": "Nhà báo",
      Thích: "Đi du lịch",
      Ghét: "Gián",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thao?v=1747895945965",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thao2?v=1747895986705",
    },
    {
      Tên: "Nguyễn Minh Thiện",
      "Biệt danh": "Bin",
      "Ngày sinh": "01/01/2010",
      "Sở thích": "Chơi thể thao",
      "Môn học yêu thích": "GDCD",
      "Trường cấp 3 muốn vô": "Chưa xác định được",
      "Ước mơ": "Cầu thủ bóng đá",
      Thích: "Chơi thể thao",
      Ghét: "Những thứ bản thân ghét",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thien?v=1747845884126",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Thien2?v=1747845919318",
    },
    {
      Tên: "Võ Hà Trang",
      "Biệt danh": "Chang",
      "Ngày sinh": "09/08/2010",
      "Sở thích": "Xem phim, Nghe nhạc, nấu ăn, đi chơi",
      "Môn học yêu thích": "Ngữ văn",
      "Trường cấp 3 muốn vô": "PVĐ",
      "Ước mơ": "Phú bà",
      Thích: "Trà đào, shopping, ngủ, hát",
      Ghét: "Thằn lằn, làm việc nhà",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Trang?v=1747919532282",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Trang2?v=1747919568876",
    },
    {
      Tên: "Lê Thanh Khánh Yên",
      "Biệt danh": "Yin",
      "Ngày sinh": "14/05/2010",
      "Sở thích": "Nấu ăn, đi chơi",
      "Môn học yêu thích": "Ngữ văn",
      "Trường cấp 3 muốn vô": "LQĐ (chuyên Văn), L2T",
      "Ước mơ": "Tiếp viên hàng không",
      Thích: "Đi chơi, ăn bún bò, chơi game",
      Ghét: "Thằn lằn",
      Ảnh: "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Yen?v=1747720993231",
      "Ảnh 2": "https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/Yen2?v=1747720537996",
    },
  ];

  const navbarMenuPC = $(".header-navbar .navbar-menu");
  const navbarMenuMobile = $(".navbar-menu.mobile");
  const menuLinks = $$(".menu-item a");
  const list = $(".list");
  const modal = $(".modal");
  const modalContent = $(".modal .modal-content");
  const navbarAdd = $(".navbar-add");
  const navbarRemove = $(".navbar-remove");

  function toggleMenu(text) {
    if (text === "add") navbarMenuMobile.classList.add("show");
    else if (text === "remove") navbarMenuMobile.classList.remove("show");
    navbarAdd.classList.toggle("hidden");
    navbarRemove.classList.toggle("hidden");
  }

  navbarAdd.addEventListener("click", function () {
    toggleMenu("add");
  });

  navbarRemove.addEventListener("click", function () {
    toggleMenu("remove");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });

  function checkVisible(e) {
    const rect = e.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  document.addEventListener("scroll", function () {
    if (checkVisible($("#home"))) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      navbarMenuPC.querySelector(".menu-item.home > a").classList.add("active");
      navbarMenuMobile
        .querySelector(".menu-item.home > a")
        .classList.add("active");
    } else if (checkVisible($("#teacher"))) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      navbarMenuPC
        .querySelector(".menu-item.teacher > a")
        .classList.add("active");
      navbarMenuMobile
        .querySelector(".menu-item.teacher > a")
        .classList.add("active");
    } else if (checkVisible($("#member"))) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      navbarMenuPC
        .querySelector(".menu-item.member > a")
        .classList.add("active");
      navbarMenuMobile
        .querySelector(".menu-item.member > a")
        .classList.add("active");
    } else if (checkVisible($("#anh"))) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      navbarMenuPC
        .querySelector(".menu-item.anh > a")
        .classList.add("active");
      navbarMenuMobile
        .querySelector(".menu-item.anh > a")
        .classList.add("active");
    }
  });

  datas.forEach((data) => {
    if (data["Tên"] === "Nguyễn Ngọc Hà My") {
      list.insertAdjacentHTML(
        "beforeend",
        `
        <div class="list-item" id="${data["Tên"]}">
          <div class="list-item-inner">
            <a class="list-image">
              <img
                src=${
                  data["Ảnh"] === ""
                    ? "https://didongviet.vn/dchannel/wp-content/uploads/2023/09/hinh-nen-chill-didongviet-8.jpg"
                    : data["Ảnh"]
                }
                alt=""
              />
            </a>

            <div class="list-item-back">
              <img
                src=https://cdn.glitch.global/8c8e1a06-fd94-444f-ad06-28a9540b1002/HaMy2?v=1747756299023
                alt=""
                style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; border-radius: inherit; z-index: -18042010"
              />
              <div style="background-color: rgba(255, 255, 255, 0.2);backdrop-filter: blur(0.5px);border-radius: inherit; padding: 10px;color:white">
                <h1>Tên: ${data["Tên"]}</h1>
                <h1>Biệt danh: ${data["Biệt danh"]}</h1>
              </div>
            </div>
          </div>
        </div>
      `
      );
    } else {
      list.insertAdjacentHTML(
        "beforeend",
        `
        <div class="list-item" id="${data["Tên"]}">
          <div class="list-item-inner">
            <a class="list-image">
              <img
                src=${
                  data["Ảnh"] === ""
                    ? "https://didongviet.vn/dchannel/wp-content/uploads/2023/09/hinh-nen-chill-didongviet-8.jpg"
                    : data["Ảnh"]
                }
                alt=""
              />
            </a>

            <div class="list-item-back">
              <h1>Tên: ${data["Tên"]}</h1>
              <h1>Biệt danh: ${data["Biệt danh"]}</h1>
            </div>
          </div>
        </div>
      `
      );
    }
  });

  modal.addEventListener("click", function (e) {
    if (!modalContent.contains(e.target)) {
      modal.classList.add("hidden");
    }
  });

  const listItem = $$(".list .list-item");

  listItem.forEach((item) =>
    item.addEventListener("click", function () {
      const name = this.id;
      const modalInfo = document.createElement("div");
      const modalImage = document.createElement("div");

      modalContent.innerHTML = "";
      modalInfo.classList.add("modal-info");
      modalImage.classList.add("modal-image");

      modal.classList.remove("hidden");

      datas.forEach((data) => {
        const keys = Object.keys(data);
        const values = Object.values(data);

        if (data["Tên"] === name) {
          modalImage.insertAdjacentHTML(
            "beforeend",
            `
              <img
                src=${
                  values[values.length - 1] === ""
                    ? "https://didongviet.vn/dchannel/wp-content/uploads/2023/09/hinh-nen-chill-didongviet-8.jpg"
                    : values[values.length - 1]
                }
              />
            `
          );

          keys.pop();
          values.pop();

          for (let i = 0; i < keys.length; ++i) {
            if (keys[i] === "Ảnh") continue;
            const p = document.createElement("p");
            p.textContent = `${keys[i]}: ${values[i]}`;
            modalInfo.appendChild(p);
          }

          modalContent.appendChild(modalInfo);
          modalContent.appendChild(modalImage);
        }
      });
    })
  );

  if (window.outerWidth <= 767.98) {
    menuLinks.forEach((link) =>
      link.addEventListener("click", function () {
        toggleMenu("remove");
      })
    );
  }

  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
      item.classList.toggle('active');
      item.querySelector('.accordion-content').classList.toggle('active');
    });
  });

  const timelineItems = document.querySelectorAll('.timeline-item');
  const contents = document.querySelectorAll('.timeline-content');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const contentId = item.getAttribute('data-content');

      contents.forEach(content => content.classList.remove('active'));
      timelineItems.forEach(timeline => timeline.classList.remove('active'));

      document.getElementById(contentId).classList.add('active');
      item.classList.add('active');
    });
  });

  const slides = document.getElementById("slides");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsContainer = document.getElementById("dots");
  const slider = ["/images/Slider/1.JPG", 
    "/images/Slider/2.JPG", 
    "/images/Slider/3.JPG", 
    "/images/Slider/4.JPG", 
    "/images/Slider/5.JPG", 
    "/images/Slider/6.JPG", 
    "/images/Slider/7.JPG", 
    "/images/Slider/8.JPG", 
    "/images/Slider/9.JPG", 
    "/images/Slider/10.JPG"];
  const totalSlides = slider.length;
  let currentIndex = 0;
  let startX = 0;

  slider.forEach((slide) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = slide;
    div.classList.add("slide");
    div.appendChild(image);
    slides.appendChild(div);
  });

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === currentIndex);
    });
  };

  const goToSlide = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlider();
  };

  next.addEventListener("click", () => goToSlide(currentIndex + 1));
  prev.addEventListener("click", () => goToSlide(currentIndex - 1));

  // Swipe handling
  slides.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  slides.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) goToSlide(currentIndex + 1); // swipe left
    else if (endX - startX > 50) goToSlide(currentIndex - 1); // swipe right
  });
});