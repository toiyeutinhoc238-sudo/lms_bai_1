const pptxgen = require('pptxgenjs');

const pres = new pptxgen();

// Layout 16:9 Widescreen (13.33 x 7.5 inches)
pres.layout = 'LAYOUT_16x9';
pres.author = 'Giáo viên Tin học 6';
pres.company = 'Tổ Tin học - THCS';
pres.subject = 'Tin học 6 - Bài 1: Nguồn gốc của AI và Quyền quyết định';
pres.title = 'Bài 1: Nguồn gốc của AI và Quyền quyết định (Tiết 2)';

// Colors (Canva Modern Education Palette)
const COLOR_BG = 'F8FAFC';
const COLOR_WHITE = 'FFFFFF';
const COLOR_NAVY = '1E1B4B';
const COLOR_TEXT = '0F172A';
const COLOR_MUTED = '64748B';
const COLOR_INDIGO = '4F46E5';
const COLOR_INDIGO_BG = 'EEF2FF';
const COLOR_GREEN = '059669';
const COLOR_GREEN_BG = 'ECFDF5';
const COLOR_AMBER = 'D97706';
const COLOR_AMBER_BG = 'FFFBEB';
const COLOR_RED = 'DC2626';
const COLOR_RED_BG = 'FEF2F2';
const COLOR_BORDER = 'E2E8F0';

const FONT_TITLE = 'Arial';
const FONT_BODY = 'Arial';

// Helper for top navigation banner on content slides
function addTopBanner(slide, category, title, subtitle) {
  // Category Pill
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.5, w: 3.5, h: 0.38,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: 'C7D2FE', width: 1 },
    rectRadius: 0.19
  });
  slide.addText(category, {
    x: 0.8, y: 0.5, w: 3.5, h: 0.38,
    fontFace: FONT_TITLE, fontSize: 10, bold: true, color: '3730A3', align: 'center', valign: 'middle'
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 0.95, w: 11.73, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 24, bold: true, color: COLOR_NAVY, valign: 'middle'
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.55, w: 11.73, h: 0.35,
      fontFace: FONT_BODY, fontSize: 13, color: COLOR_MUTED, valign: 'top'
    });
  }
}

// Helper for slide footer
function addFooter(slide, slideNum, totalSlides = 7) {
  slide.addText(`TIN HỌC 6 • BÀI 1: NGUỒN GỐC CỦA AI VÀ QUYỀN QUYẾT ĐỊNH (TIẾT 2)`, {
    x: 0.8, y: 6.95, w: 8.0, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8'
  });
  slide.addText(`Trang ${slideNum} / ${totalSlides}`, {
    x: 10.53, y: 6.95, w: 2.0, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8', align: 'right'
  });
}

// ==========================================
// SLIDE 1: SLIDE BÌA (CANVA EDITORIAL COVER)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: 'F1F5F9' };

  // Decorative top bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.33, h: 0.2, fill: { color: COLOR_INDIGO }
  });

  // Center Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.2, y: 1.0, w: 10.93, h: 5.5,
    fill: { color: COLOR_WHITE },
    line: { color: COLOR_BORDER, width: 1.5 },
    rectRadius: 0.25
  });

  // Badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.8, y: 1.5, w: 4.8, h: 0.42,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: 'C7D2FE', width: 1 },
    rectRadius: 0.21
  });
  slide.addText('CHUYÊN ĐỀ TRÍ TUỆ NHÂN TẠO • TIN HỌC 6', {
    x: 1.8, y: 1.5, w: 4.8, h: 0.42,
    fontFace: FONT_TITLE, fontSize: 11, bold: true, color: '3730A3', align: 'center', valign: 'middle'
  });

  // Main Big Title
  slide.addText('BÀI 1: NGUỒN GỐC CỦA AI\nVÀ QUYỀN QUYẾT ĐỊNH', {
    x: 1.8, y: 2.1, w: 9.5, h: 1.4,
    fontFace: FONT_TITLE, fontSize: 32, bold: true, color: COLOR_NAVY, lineSpacingMultiple: 1.15
  });

  // Lesson Subtitle
  slide.addText('TIẾT 2: TRỌ LỰC HAY PHÓ MẶC? NGUYÊN TẮC "CON NGƯỜI TRONG VÒNG LẶP"', {
    x: 1.8, y: 3.65, w: 9.5, h: 0.5,
    fontFace: FONT_BODY, fontSize: 15, bold: true, color: COLOR_GREEN
  });

  // Separator line
  slide.addShape(pres.ShapeType.line, {
    x: 1.8, y: 4.3, w: 9.5, h: 0,
    line: { color: COLOR_BORDER, width: 1.5 }
  });

  // 3 Feature Pills
  const pills = [
    { title: 'Hoạt động 2.3', desc: 'So sánh Xe đạp điện & Robot hút bụi' },
    { title: 'Hoạt động 3', desc: 'Phân tích 2 Case Study sự cố AI' },
    { title: 'Hoạt động 4', desc: 'Phiếu học tập mini: Tuyên ngôn làm chủ AI' }
  ];

  pills.forEach((p, idx) => {
    const startX = 1.8 + idx * 3.25;
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX, y: 4.6, w: 3.0, h: 1.2,
      fill: { color: 'F8FAFC' },
      line: { color: COLOR_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addText(p.title, {
      x: startX + 0.2, y: 4.75, w: 2.6, h: 0.3,
      fontFace: FONT_TITLE, fontSize: 12, bold: true, color: COLOR_INDIGO
    });
    slide.addText(p.desc, {
      x: startX + 0.2, y: 5.1, w: 2.6, h: 0.55,
      fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.1
    });
  });

  addFooter(slide, 1);
}

// ==========================================
// SLIDE 2: ĐỐI CHIẾU TRỰC QUAN (XE ĐẠP ĐIỆN VS ROBOT HÚT BỤI)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'HOẠT ĐỘNG 2.3 • KHÁM PHÁ KIẾN THỨC MỚI', 'Khi Học Tập Cùng AI: Em Nên Là Ai?', 'Quan sát 2 phương thức hoạt động quen thuộc và trả lời câu hỏi phản chiếu');

  // Card 1: Xe đạp điện (Trái)
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.05, w: 5.7, h: 3.65,
    fill: { color: COLOR_GREEN_BG },
    line: { color: '86EFAC', width: 2 },
    rectRadius: 0.2
  });

  slide.addText('🚲⚡ HÌNH TƯỢNG 1: NGƯỜI LÁI XE ĐẠP ĐIỆN', {
    x: 1.1, y: 2.25, w: 5.1, h: 0.45,
    fontFace: FONT_TITLE, fontSize: 15, bold: true, color: '14532D'
  });

  slide.addText([
    { text: '• Bản chất: ', options: { bold: true, color: '14532D' } },
    { text: 'Người lái trực tiếp cầm ghi-đông, điều khiển hướng đi và tốc độ.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Vai trò động cơ điện: ', options: { bold: true, color: '14532D' } },
    { text: 'Chỉ trợ lực giúp đạp nhẹ hơn, lên dốc nhanh hơn, đỡ mất sức.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Cảnh báo an toàn: ', options: { bold: true, color: '14532D' } },
    { text: 'Nếu người lái buông tay hoặc nhắm mắt: Xe sẽ đổ ngã ngay lập tức!', options: { bold: true, color: COLOR_RED } }
  ], {
    x: 1.1, y: 2.8, w: 5.1, h: 2.7,
    fontFace: FONT_BODY, fontSize: 13, lineSpacingMultiple: 1.15
  });

  // Card 2: Robot hút bụi (Phải)
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.83, y: 2.05, w: 5.7, h: 3.65,
    fill: { color: COLOR_AMBER_BG },
    line: { color: 'FDE68A', width: 2 },
    rectRadius: 0.2
  });

  slide.addText('🤖🧹 HÌNH TƯỢNG 2: CHỦ CỦA ROBOT HÚT BỤI', {
    x: 7.13, y: 2.25, w: 5.1, h: 0.45,
    fontFace: FONT_TITLE, fontSize: 15, bold: true, color: '78350F'
  });

  slide.addText([
    { text: '• Bản chất: ', options: { bold: true, color: '78350F' } },
    { text: 'Người dùng bấm nút khởi động rồi bỏ đi làm việc khác.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Cơ chế hoạt động: ', options: { bold: true, color: '78350F' } },
    { text: 'Robot tự mò đường bằng cảm biến va chạm cố định, không nhận biết ngữ cảnh.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Nguy cơ sự cố: ', options: { bold: true, color: '78350F' } },
    { text: 'Gặp vũng nước, dây điện lòng thòng, bậc thang cao: Chập cháy, kẹt máy!', options: { bold: true, color: COLOR_RED } }
  ], {
    x: 7.13, y: 2.8, w: 5.1, h: 2.7,
    fontFace: FONT_BODY, fontSize: 13, lineSpacingMultiple: 1.15
  });

  // Bottom Question Banner
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.9, w: 11.73, h: 0.85,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: '818CF8', width: 1.5 },
    rectRadius: 0.15
  });

  slide.addText('❓ CÂU HỎI TƯ DUY CHO CẢ LỚP: Khi nhờ công cụ AI giúp làm bài tập, vai trò của em nên giống "Người lái xe đạp điện" hay "Chủ của robot hút bụi"? Vì sao?', {
    x: 1.1, y: 6.0, w: 11.13, h: 0.65,
    fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: '312E81', align: 'center', valign: 'middle'
  });

  addFooter(slide, 2);
}

// ==========================================
// SLIDE 3: TRIẾT LÝ XE ĐẠP ĐIỆN (HUMAN-IN-THE-LOOP)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'NGUYÊN TẮC VÀNG #1 • TRIẾT LÝ SƯ PHẠM', 'Xe Đạp Điện: Con Người Luôn Trong Vòng Lặp (Human-in-the-loop)', 'AI chỉ là năng lượng bổ trợ - Con người giữ quyền chỉ huy và điều hướng tuyệt đối');

  const columns = [
    {
      num: '01',
      title: 'Cầm Chắc Ghi-đông',
      subtitle: 'Người chỉ huy mục tiêu',
      content: 'Con người là người đặt đề bài, định hình ý tưởng và chọn đích đến. AI không thể tự biết mục tiêu nếu con người không dẫn dắt.',
      color: COLOR_INDIGO,
      bg: COLOR_INDIGO_BG
    },
    {
      num: '02',
      title: 'Động Cơ Trợ Lực',
      subtitle: 'Tăng tốc giải quyết việc khó',
      content: 'Mô-tơ điện giúp leo dốc nhanh hơn, đỡ tốn sức hơn — giống như AI giúp em tra cứu từ điển, gợi ý dàn ý, tóm tắt tư liệu thần tốc.',
      color: COLOR_GREEN,
      bg: COLOR_GREEN_BG
    },
    {
      num: '03',
      title: 'Bàn Tay Bóp Phanh',
      subtitle: 'Kiểm soát an toàn tuyệt đối',
      content: 'Khi gặp khúc cua nguy hiểm hoặc thông tin sai lệch, chính con người phải lập tức bóp phanh kiểm tra, chỉnh sửa trước khi xuất bản.',
      color: COLOR_AMBER,
      bg: COLOR_AMBER_BG
    }
  ];

  columns.forEach((col, idx) => {
    const startX = 0.8 + idx * 4.04;
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX, y: 2.05, w: 3.65, h: 3.7,
      fill: { color: COLOR_WHITE },
      line: { color: COLOR_BORDER, width: 1.5 },
      rectRadius: 0.2
    });

    // Num Circle
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX + 0.3, y: 2.35, w: 0.9, h: 0.45,
      fill: { color: col.bg },
      rectRadius: 0.1
    });
    slide.addText(col.num, {
      x: startX + 0.3, y: 2.35, w: 0.9, h: 0.45,
      fontFace: FONT_TITLE, fontSize: 14, bold: true, color: col.color, align: 'center', valign: 'middle'
    });

    slide.addText(col.title, {
      x: startX + 0.3, y: 2.95, w: 3.05, h: 0.4,
      fontFace: FONT_TITLE, fontSize: 17, bold: true, color: COLOR_NAVY
    });

    slide.addText(col.subtitle, {
      x: startX + 0.3, y: 3.4, w: 3.05, h: 0.3,
      fontFace: FONT_BODY, fontSize: 12, bold: true, color: col.color
    });

    slide.addText(col.content, {
      x: startX + 0.3, y: 3.8, w: 3.05, h: 1.7,
      fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
    });
  });

  // Core Takeaway Box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.95, w: 11.73, h: 0.8,
    fill: { color: COLOR_GREEN_BG },
    line: { color: '86EFAC', width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('💡 BÀI HỌC CỐT LÕI: "Human-in-the-loop" (Con người trong vòng lặp) nghĩa là máy móc chỉ là trợ thủ đắc lực; con người bắt buộc phải luôn hiện diện trong mọi khâu để giám sát và đưa ra quyết định cuối cùng!', {
    x: 1.1, y: 6.05, w: 11.13, h: 0.6,
    fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: '14532D', valign: 'middle'
  });

  addFooter(slide, 3);
}

// ==========================================
// SLIDE 4: CẢNH BÁO CẠM BẪY ROBOT HÚT BỤI
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'CẢNH BÁO SƯ PHẠM • NGUY CƠ PHÓ MẶC', 'Robot Hút Bụi: Khi Con Người "Rời Khỏi Vòng Lặp"', 'Giao toàn quyền bài tập cho AI mà không kiểm chứng sẽ dẫn tới những hậu quả tai hại nào?');

  const risks = [
    {
      letter: 'A',
      title: 'Hiện Tượng Ảo Giác AI',
      subtitle: 'Bịa đặt thông tin trôi chảy',
      content: 'AI không có ý thức thật. Khi thiếu dữ liệu chuẩn, AI có thể tự bịa ra nhân vật, mốc thời gian lịch sử hoặc công thức sai với giọng văn vô cùng tự tin!',
      bg: COLOR_RED_BG,
      color: COLOR_RED
    },
    {
      letter: 'B',
      title: 'Teo Mòn Tư Duy Độc Lập',
      subtitle: 'Lệ thuộc và thụ động',
      content: 'Nếu bài tập nào cũng để AI "nghĩ hộ và viết hộ", bộ não của học sinh sẽ mất dần khả năng phân tích, lập luận phản biện và diễn đạt ngôn từ.',
      bg: COLOR_AMBER_BG,
      color: COLOR_AMBER
    },
    {
      letter: 'C',
      title: 'Mất Uy Tín Cá Nhân',
      subtitle: 'Gánh chịu hậu quả một mình',
      content: 'Robot hút bụi lao xuống nước sẽ bị cháy máy. Học sinh nộp bài sao chép từ AI sẽ bị điểm kém, bị kỷ luật và mất đi sự tín nhiệm của thầy cô, bạn bè.',
      bg: 'FDF2F8',
      color: 'BE185D'
    }
  ];

  risks.forEach((r, idx) => {
    const startX = 0.8 + idx * 4.04;
    slide.addShape(pres.ShapeType.roundRect, {
      x: startX, y: 2.05, w: 3.65, h: 3.7,
      fill: { color: COLOR_WHITE },
      line: { color: 'FCA5A5', width: 1.5 },
      rectRadius: 0.2
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: startX + 0.3, y: 2.35, w: 0.9, h: 0.45,
      fill: { color: r.bg },
      rectRadius: 0.1
    });
    slide.addText(r.letter, {
      x: startX + 0.3, y: 2.35, w: 0.9, h: 0.45,
      fontFace: FONT_TITLE, fontSize: 15, bold: true, color: r.color, align: 'center', valign: 'middle'
    });

    slide.addText(r.title, {
      x: startX + 0.3, y: 2.95, w: 3.05, h: 0.4,
      fontFace: FONT_TITLE, fontSize: 17, bold: true, color: COLOR_NAVY
    });

    slide.addText(r.subtitle, {
      x: startX + 0.3, y: 3.4, w: 3.05, h: 0.3,
      fontFace: FONT_BODY, fontSize: 12, bold: true, color: r.color
    });

    slide.addText(r.content, {
      x: startX + 0.3, y: 3.8, w: 3.05, h: 1.7,
      fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
    });
  });

  // Warning Banner
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.95, w: 11.73, h: 0.8,
    fill: { color: COLOR_RED_BG },
    line: { color: 'F87171', width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('⛔ QUY TẮC PHÒNG TRÁNH: Tuyệt đối không đối xử với AI như Robot hút bụi! Đừng bao giờ "bấm nút tạo bài" rồi ung dung đem nộp mà không đọc kỹ, kiểm tra và chịu trách nhiệm!', {
    x: 1.1, y: 6.05, w: 11.13, h: 0.6,
    fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: '991B1B', valign: 'middle'
  });

  addFooter(slide, 4);
}

// ==========================================
// SLIDE 5: TIÊU CHUẨN GIÁO DỤC QUỐC TẾ (US DEPT OF ED & UNESCO)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'CƠ SỞ KHOA HỌC & PHÁP LÝ QUỐC TẾ', 'Khuyến Nghị Từ Các Chuyên Gia Giáo Dục Toàn Cầu', 'Bộ Giáo dục Hoa Kỳ (2023) & Khung Năng lực AI của UNESCO (2024)');

  // Large Quote Box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.05, w: 11.73, h: 2.1,
    fill: { color: COLOR_WHITE },
    line: { color: COLOR_INDIGO, width: 2 },
    rectRadius: 0.2
  });

  slide.addText('“Chúng tôi hình dung tương lai công nghệ trong giáo dục phải giống như một CHIẾC XE ĐẠP ĐIỆN, chứ không phải một chiếc robot hút bụi. Trên chiếc xe đạp điện, con người hoàn toàn tỉnh táo, nhận biết và kiểm soát 100% hướng đi…”', {
    x: 1.2, y: 2.25, w: 10.93, h: 1.2,
    fontFace: FONT_BODY, fontSize: 15.5, italic: true, color: COLOR_NAVY, lineSpacingMultiple: 1.25
  });

  slide.addText('— Báo cáo khuyến nghị công nghệ giáo dục, Bộ Giáo dục Hoa Kỳ (U.S. Department of Education, 2023)', {
    x: 1.2, y: 3.55, w: 10.93, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 12.5, bold: true, color: COLOR_INDIGO
  });

  // 2 Principle Cards Below
  // Principle 1
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 4.35, w: 5.7, h: 2.3,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: 'C7D2FE', width: 1.5 },
    rectRadius: 0.2
  });
  slide.addText('1. Human-in-the-loop (Giám sát liên tục)', {
    x: 1.1, y: 4.55, w: 5.1, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 14.5, bold: true, color: '312E81'
  });
  slide.addText('Học sinh luôn là chủ thể trung tâm của quá trình nhận thức. Mọi sản phẩm do AI gợi ý chỉ là dữ liệu thô ban đầu; học sinh phải dùng tư duy của mình để gọt giũa và hoàn thiện.', {
    x: 1.1, y: 4.95, w: 5.1, h: 1.5,
    fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });

  // Principle 2
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.83, y: 4.35, w: 5.7, h: 2.3,
    fill: { color: COLOR_GREEN_BG },
    line: { color: 'A7F3D0', width: 1.5 },
    rectRadius: 0.2
  });
  slide.addText('2. Human Accountability (Trách nhiệm giải trình)', {
    x: 7.13, y: 4.55, w: 5.1, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 14.5, bold: true, color: '065F46'
  });
  slide.addText('Máy móc không phải con người nên không có tư cách pháp nhân hay đạo đức. Khi có lỗi sai, máy tính không thể chịu phạt thay học sinh. Người dùng chịu 100% trách nhiệm trước kết quả!', {
    x: 7.13, y: 4.95, w: 5.1, h: 1.5,
    fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });

  addFooter(slide, 5);
}

// ==========================================
// SLIDE 6: CHUYỂN GIAO HOẠT ĐỘNG 3 (2 CASE STUDY NHÓM)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'HOẠT ĐỘNG 3 • VẬN DỤNG & THẢO LUẬN NHÓM (20 PHÚT)', 'Nhiệm Vụ Nhóm: Phân Tích 2 Tình Huống Sự Cố Thực Tế', 'Áp dụng nguyên tắc "Người Cầm Lái" để mổ xẻ nguyên nhân và trách nhiệm');

  // Case Study 1 Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.05, w: 5.7, h: 3.5,
    fill: { color: COLOR_WHITE },
    line: { color: 'FCA5A5', width: 2 },
    rectRadius: 0.2
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.1, y: 2.25, w: 2.2, h: 0.35,
    fill: { color: COLOR_RED_BG },
    rectRadius: 0.08
  });
  slide.addText('CASE STUDY 1', {
    x: 1.1, y: 2.25, w: 2.2, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 11, bold: true, color: COLOR_RED, align: 'center', valign: 'middle'
  });
  slide.addText('Bài Tập Lịch Sử Của Bạn A', {
    x: 1.1, y: 2.7, w: 5.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 16, bold: true, color: COLOR_NAVY
  });
  slide.addText('Bạn A sao chép nguyên văn văn bản AI tạo ra về Chiến thắng Bạch Đằng năm 938 đem nộp. Cô giáo phát hiện AI bịa mốc thời gian và nhân vật sai lệch.\n\n👉 Bạn A phân trần: "Tại máy tính viết sai chứ không phải em!"', {
    x: 1.1, y: 3.15, w: 5.1, h: 1.6,
    fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
  slide.addText('❓ Nhiệm vụ: Chỉ ra nguyên nhân & Ai chịu trách nhiệm 100%?', {
    x: 1.1, y: 4.85, w: 5.1, h: 0.5,
    fontFace: FONT_BODY, fontSize: 12, bold: true, color: COLOR_RED
  });

  // Case Study 2 Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.83, y: 2.05, w: 5.7, h: 3.5,
    fill: { color: COLOR_WHITE },
    line: { color: 'FCD34D', width: 2 },
    rectRadius: 0.2
  });
  slide.addShape(pres.ShapeType.roundRect, {
    x: 7.13, y: 2.25, w: 2.2, h: 0.35,
    fill: { color: COLOR_AMBER_BG },
    rectRadius: 0.08
  });
  slide.addText('CASE STUDY 2', {
    x: 7.13, y: 2.25, w: 2.2, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 11, bold: true, color: COLOR_AMBER, align: 'center', valign: 'middle'
  });
  slide.addText('Ô Tô Lao Xuống Ruộng Ban Đêm', {
    x: 7.13, y: 2.7, w: 5.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 16, bold: true, color: COLOR_NAVY
  });
  slide.addText('Chú tài xế B tin tưởng mù quáng vào lối tắt của Google Maps ban đêm, không quan sát đèn xe và biển báo thực tế, lao thẳng xe xuống đê bùn ngập mép ruộng.\n\n👉 Chiếc xe bị sa lầy và phải tốn tiền gọi cứu hộ kéo lên.', {
    x: 7.13, y: 3.15, w: 5.1, h: 1.6,
    fontFace: FONT_BODY, fontSize: 12.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
  slide.addText('❓ Nhiệm vụ: Chú tài xế có thể kiện đòi hãng bản đồ đền tiền không?', {
    x: 7.13, y: 4.85, w: 5.1, h: 0.5,
    fontFace: FONT_BODY, fontSize: 12, bold: true, color: COLOR_AMBER
  });

  // Instructions Bottom Bar
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.75, w: 11.73, h: 1.0,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: '818CF8', width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('⏱ THỜI GIAN LÀM VIỆC NHÓM: 7 PHÚT • SẢN PHẨM: BẢNG PHỤ KHỔ A3\nCác nhóm thảo luận, ghi câu trả lời vào Bảng phụ theo 2 cột và cử đại diện lên thuyết trình bảo vệ quan điểm!', {
    x: 1.1, y: 5.85, w: 11.13, h: 0.8,
    fontFace: FONT_TITLE, fontSize: 13, bold: true, color: '312E81', align: 'center', valign: 'middle'
  });

  addFooter(slide, 6);
}

// ==========================================
// SLIDE 7: CHUYỂN GIAO HOẠT ĐỘNG 4 (PHIẾU HỌC TẬP MINI TUYÊN NGÔN)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: COLOR_BG };
  addTopBanner(slide, 'HOẠT ĐỘNG 4 • VẬN DỤNG & CAM KẾT (15 PHÚT)', 'Tuyên Ngôn Làm Chủ AI: Xây Dựng Quy Tắc Hành Động', 'Mỗi học sinh viết 1 Phiếu học tập mini rồi dán lên bảng tạo Bức tường Tuyên ngôn của lớp');

  // Mini Worksheet Green (Do)
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.05, w: 5.7, h: 3.5,
    fill: { color: COLOR_GREEN_BG },
    line: { color: COLOR_GREEN, width: 2, dashType: 'dash' },
    rectRadius: 0.2
  });
  slide.addText('🟢 PHIẾU HỌC TẬP MINI • QUY TẮC NÊN (DO)', {
    x: 1.1, y: 2.25, w: 5.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 14.5, bold: true, color: '14532D'
  });
  slide.addText([
    { text: '• Nhiệm vụ: ', options: { bold: true, color: '14532D' } },
    { text: 'Đề xuất 01 hành động đúng đắn em cam kết NÊN LÀM khi dùng AI.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Gợi ý mẫu của học sinh:\n', options: { bold: true, color: '14532D' } },
    { text: '  + "NÊN tự xây dựng dàn ý bài trước khi nhờ AI góp ý câu từ."\n', options: { color: '166534', italic: true } },
    { text: '  + "NÊN kiểm tra lại ngày tháng lịch sử và công thức trong SGK chuẩn."\n', options: { color: '166534', italic: true } },
    { text: '  + "NÊN xem AI như trợ lý thông minh, mình là người chỉ huy."', options: { color: '166534', italic: true } }
  ], {
    x: 1.1, y: 2.75, w: 5.1, h: 2.6,
    fontFace: FONT_BODY, fontSize: 12.5, lineSpacingMultiple: 1.15
  });

  // Mini Worksheet Red (Don't)
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.83, y: 2.05, w: 5.7, h: 3.5,
    fill: { color: COLOR_RED_BG },
    line: { color: COLOR_RED, width: 2, dashType: 'dash' },
    rectRadius: 0.2
  });
  slide.addText('🔴 PHIẾU HỌC TẬP MINI • QUY TẮC KHÔNG NÊN (DON\'T)', {
    x: 7.13, y: 2.25, w: 5.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 14.5, bold: true, color: '881337'
  });
  slide.addText([
    { text: '• Nhiệm vụ: ', options: { bold: true, color: '881337' } },
    { text: 'Đề xuất 01 hành vi sai lầm em cam kết KHÔNG NÊN MẮC PHẢI.\n\n', options: { color: COLOR_TEXT } },
    { text: '• Gợi ý mẫu của học sinh:\n', options: { bold: true, color: '881337' } },
    { text: '  + "KHÔNG NÊN sao chép nguyên văn bài làm của AI nộp cho thầy cô."\n', options: { color: '991B1B', italic: true } },
    { text: '  + "KHÔNG NÊN tin tưởng 100% mọi điều AI nói mà không kiểm chứng."\n', options: { color: '991B1B', italic: true } },
    { text: '  + "KHÔNG NÊN đổ lỗi cho máy tính khi bài làm bị điểm kém."', options: { color: '991B1B', italic: true } }
  ], {
    x: 7.13, y: 2.75, w: 5.1, h: 2.6,
    fontFace: FONT_BODY, fontSize: 12.5, lineSpacingMultiple: 1.15
  });

  // Final Call to Action
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.75, w: 11.73, h: 1.0,
    fill: { color: COLOR_INDIGO },
    rectRadius: 0.15
  });
  slide.addText('✨ THÔNG ĐIỆP BÀI HỌC: "AI CHỈ LÀ CÔNG CỤ TRỢ LỰC - CON NGƯỜI LUÔN LÀ NGƯỜI QUYẾT ĐỊNH VÀ CHỊU TRÁCH NHIỆM!"\nViết phiếu học tập mini trong 3 phút ➔ Lần lượt dán lên Bảng Lớp!', {
    x: 1.1, y: 5.85, w: 11.13, h: 0.8,
    fontFace: FONT_TITLE, fontSize: 13, bold: true, color: COLOR_WHITE, align: 'center', valign: 'middle'
  });

  addFooter(slide, 7);
}

// Generate Presentation File
const outputPath = 'c:/Users/BRAVO 15/Downloads/LMS bài 1/bai_1_tiet_2_canva_slide.pptx';
pres.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log(`Successfully generated PPTX: ${fileName}`);
  })
  .catch(err => {
    console.error(`Error generating PPTX:`, err);
    process.exit(1);
  });
