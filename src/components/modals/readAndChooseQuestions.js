// Mapping of ReadAndChoose question IDs to question objects
// shape: { id, title?, prompt?, question, choices: [], correctIndex }

const questions = {
  9: {
    id: 9,
    title: "Phú Thọ",
    question:
      "Dựa vào câu chuyện của mẹ Âu Cơ trên nắp hộp nhân vật, hãy cho biết mẹ đã dạy muôn dân trồng lúa nước, nuôi tằm, dệt vải, hái lượm tại vùng đất nào ở Phú Thọ?",
    choices: ["Đền Hùng", "Phù Đức", "Hiền Lương", "An Thái"],
    correctIndex: 2,
  },

  12: {
    id: 12,
    title: "TP. Hà Nội",
    prompt:
      "Hà Nội có chong chóng\nCứ tự quay trong nhà\nKhông cần trời thổi gió\nKhông cần bạn chạy xa.\n…\n_____ có Hồ Gươm\nNước xanh như pha mực\nBên hồ ngọn Tháp Bút\nViết thơ lên trời cao.",
    question: "Tên địa danh thích hợp ở chỗ trống là?",
    choices: ["Vĩnh Long", "Hà Nội", "Ninh Thuận", "Long Khánh"],
    correctIndex: 1,
  },

  13: {
    id: 13,
    title: "TP. Hải Phòng",
    question:
      'Ở Hải Phòng, hoa phượng đỏ được trồng rộng rãi. Vào những ngày hè tháng 5-6, khắp con đường, ngõ phố của đô thị này đều ngập trong sắc hoa. Vì thế Hải Phòng được biết đến với tên gọi "Thành phố ______".',
    choices: ["Hoa anh đào", "Hoa phượng đỏ", "Hoa hồng", "Hoa cẩm tú cầu"],
    correctIndex: 1,
  },

  14: {
    id: 14,
    title: "Hưng Yên",
    question:
      "Tính từ chỉ màu sắc có trong đoạn văn về mùa nhãn ở tỉnh Hưng Yên là?",
    choices: ["Vàng nhạt", "Lộc lá", "Miên man", "Li ti"],
    correctIndex: 0,
  },

  16: {
    id: 16,
    title: "Thanh Hóa",
    question: "Bảo tàng Thanh Hóa hiện thuộc phường nào?",
    choices: ["Lam Xơn", "Sơn Lam", "Lam Sơn", "Sam Lơn"],
    correctIndex: 2,
  },

  22: {
    id: 22,
    title: "Quảng Ngãi",
    question:
      "Làng nghề Mỹ Thiện ở Quảng Ngãi làm đồ vật từ đất sét là làng nghề gì?",
    choices: ["Đan mây", "Gốm", "Nước mắm", "Chổi đót"],
    correctIndex: 1,
  },

  31: {
    id: 31,
    title: "An Giang",
    question: "Hai con sông lớn nào chảy qua An Giang từ Trước ra Sau?",
    choices: [
      "Sông Hồng và sông Đà",
      "Sông Mã và sông Lam",
      "Sông Tiền và sông Hậu",
      "Sông Gianh và sông Nhật Lệ",
    ],
    correctIndex: 2,
  },

  32: {
    id: 32,
    title: "Vĩnh Long",
    question:
      "Trong các làng nghề sau, làng nghề nào không được nhắc đến trong thông tin trên?",
    choices: ["Làm gạch", "Dệt chiếu", "Đan thảm lục bình", "Làm bánh tráng"],
    correctIndex: 3,
  },

  33: {
    id: 33,
    title: "TP. Cần Thơ",
    question:
      "Người dân ở chợ nổi Cái Răng thường dùng phương tiện gì để đi lại và buôn bán?",
    choices: ["Xe đạp", "Ô tô", "Ghe, xuồng", "Máy bay"],
    correctIndex: 2,
  },
};

export function getReadAndChooseQuestion(id) {
  const n = Number(id);
  return questions[n] || null;
}

export default questions;
