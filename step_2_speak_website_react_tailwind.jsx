import React from 'react';

// Step2Speak - Single-file React component (Tailwind CSS)
// Usage:
// 1. Create a React app (CRA / Vite / Next).
// 2. Install and configure Tailwind CSS (https://tailwindcss.com/docs).
// 3. Drop this component into your pages (e.g., src/App.jsx) and import it.

export default function Step2SpeakHome() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">S2</div>
            <div>
              <h1 className="text-lg font-semibold">Step2Speak</h1>
              <p className="text-xs text-gray-500">Step to English, Speak to the World</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-indigo-600">Trang chủ</a>
            <a href="#about" className="hover:text-indigo-600">Giới thiệu</a>
            <a href="#courses" className="hover:text-indigo-600">Khóa học</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#trial" className="hidden md:inline-block px-4 py-2 rounded-md bg-orange-500 text-white font-medium shadow">Đăng ký học thử</a>
            <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b3f1c3a10ef2d0f7e1a7f9aa5f1a1e3')] bg-cover bg-center">
        <div className="backdrop-brightness-75">
          <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Step to English, <span className="text-orange-300">Speak to the World</span></h2>
              <p className="mt-6 text-lg text-white/90">Khơi nguồn tự tin giao tiếp tiếng Anh theo lộ trình cá nhân hóa — Giáo viên bản ngữ, giáo trình quốc tế & cam kết đầu ra.</p>

              <div className="mt-8 flex gap-4">
                <a href="#trial" className="px-5 py-3 rounded-md bg-orange-400 text-white font-semibold shadow-md">Đăng ký học thử</a>
                <a href="#courses" className="px-5 py-3 rounded-md bg-white text-indigo-700 font-semibold">Xem khóa học</a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">👩‍🏫</div>
                  <div className="text-white/90">Giáo viên bản ngữ & Việt Nam</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">📚</div>
                  <div className="text-white/90">Giáo trình quốc tế</div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              {/* Mockup phone / image card */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7d3f1b2f3d4c5b6a7e8f9a0b1c2d3e4f" alt="students" className="rounded-lg w-full h-56 object-cover" />
                <div className="mt-4">
                  <h3 className="font-semibold">Lớp giao tiếp cơ bản</h3>
                  <p className="text-sm text-gray-600 mt-1">3 tháng | 2 buổi/tuần | Lớp tối ưu cho người bận rộn</p>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-md border text-sm">Xem chi tiết</button>
                    <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Đăng ký</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="about">
        <h3 className="text-2xl font-bold text-center">Tại sao chọn Step2Speak?</h3>
        <p className="text-center text-gray-600 mt-2">Lộ trình cá nhân hóa, giáo viên chất lượng, cam kết đầu ra.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '👩‍🏫', title: 'Giáo viên chất lượng', desc: 'Bản ngữ & Việt Nam, đào tạo chuyên sâu.' },
            { icon: '🧭', title: 'Lộ trình cá nhân', desc: 'Học theo mục tiêu và thời gian của bạn.' },
            { icon: '📘', title: 'Giáo trình chuẩn', desc: 'Tích hợp phương pháp giao tiếp hiện đại.' },
            { icon: '✅', title: 'Cam kết đầu ra', desc: 'Đạt mục tiêu hoặc hỗ trợ thêm.' },
          ].map((it, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-3">
              <div className="text-3xl">{it.icon}</div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-white/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Khóa học tiêu biểu</h3>
            <a href="#courses" className="text-sm text-indigo-600">Xem tất cả</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Giao tiếp cơ bản', length: '3 tháng', badge: 'Phổ biến' },
              { title: 'IELTS Intensive', length: '4 tháng', badge: 'Chuyên sâu' },
              { title: 'Tiếng Anh trẻ em', length: 'Theo trình độ', badge: 'Vui học' },
              { title: 'Tiếng Anh doanh nghiệp', length: 'Tùy chỉnh', badge: 'Doanh nghiệp' },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold">{c.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{c.length}</p>
                  </div>
                  <div className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{c.badge}</div>
                </div>

                <p className="text-sm text-gray-600 mt-4">Mô tả ngắn về khóa học — mục tiêu, phương pháp và kết quả kỳ vọng.</p>

                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-2 rounded-md border text-sm">Xem</button>
                  <button className="px-3 py-2 rounded-md bg-orange-400 text-white text-sm">Đăng ký</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center">Câu chuyện thành công</h3>
        <p className="text-center text-gray-600 mt-2">Nghe trải nghiệm học viên sau khi tham gia chương trình.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">👩</div>
                <div>
                  <div className="font-semibold">Ngọc H</div>
                  <div className="text-xs text-gray-500">Học viên</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">"Sau 3 tháng, mình có thể tự tin phỏng vấn bằng tiếng Anh. Giáo viên rất supportive và lộ trình rõ ràng."</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Blog & Tài nguyên</h3>
            <a href="#blog" className="text-sm text-indigo-600">Xem tất cả</a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <article key={i} className="bg-white rounded-xl p-4 shadow">
                <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">Ảnh bài viết</div>
                <h4 className="font-semibold mt-3">3 Tips để cải thiện phát âm</h4>
                <p className="text-sm text-gray-600 mt-2">Mẹo ngắn, bài tập thực hành và video hướng dẫn để bạn luyện hàng ngày.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-gray-500">Mar 12, 2025</div>
                  <a className="text-sm text-indigo-600">Đọc tiếp</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="trial" className="bg-gradient-to-r from-indigo-600 to-blue-500 py-14 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Đăng ký buổi học thử miễn phí</h3>
            <p className="mt-2 text-sm/relaxed">Chọn lịch, nhận tư vấn lộ trình miễn phí và trải nghiệm phương pháp học của chúng tôi.</p>
          </div>

          <form className="w-full md:w-1/2 bg-white/10 rounded-lg p-4 flex gap-2">
            <input type="text" placeholder="Họ tên" className="flex-1 px-3 py-2 rounded-md bg-white/90 text-gray-800" />
            <input type="tel" placeholder="SĐT" className="w-40 px-3 py-2 rounded-md bg-white/90 text-gray-800" />
            <button className="px-4 py-2 rounded-md bg-orange-400 text-white font-semibold">Gửi</button>
          </form>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold">Step2Speak</h4>
            <p className="text-sm text-gray-600 mt-2">923/5 Tân Kỳ Tân Quý, P.Bình Hưng Hòa A, Q.Bình Tân, TP.HCM</p>
            <p className="text-sm text-gray-600 mt-1">Hotline: 090-xxx-xxxx</p>
          </div>

          <div>
            <h5 className="font-semibold">Menu</h5>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Khóa học</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Kết nối</h5>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">f</div>
              <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center">t</div>
              <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center">z</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-4">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Step2Speak. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
