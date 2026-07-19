const APP_CONFIG = {
    // 1. URL CỦA WEB APP
    API_URL: "https://script.google.com/macros/s/AKfycbw1KJcuCwckBZPqtp00LvSR_8kbG_nD8we-vOhn7xCmt0fgLCSnPBob88vOjoIrZmn1gQ/exec",
    
    // 2. THÔNG TIN GIAO DIỆN
    TEN_DON_VI: "TRƯỜNG TH VÀ THCS HỢP THÀNH",
    PHAN_MEM: "HỆ THỐNG QUẢN LÝ HỒ SƠ CHI BỘ",
    LOGO_URL: "https://i.ibb.co/d0JNW94Z/logo-l-a-ch-n6.png",
    
    // 3. XÁC THỰC BẢO MẬT GIAO THỨC GOOGLE
    CLIENT_ID: "95180316485-a577mlt4a1ve3u52pd0t4rkm6bnljuns.apps.googleusercontent.com",
    
    // 4. MA TRẬN PHÂN QUYỀN TRÍCH XUẤT HỒ SƠ
    PHAN_QUYEN_TAI_KHOAN: {
        "hoangngoclamlc@gmail.com": {
            ID_MAU: "1UqCA0XHewvkDhWcn-tF4DoizdGPVEZ_uR_rD91ORIGk",
            ID_THU_MUC_LUU: "1ZMwNvtDHfyRP73CWEDMh8xfQ-mGZ2e6h"
        },
        "tulieuhopthanh@gmail.com": {
            ID_MAU: "1UqCA0XHewvkDhWcn-tF4DoizdGPVEZ_uR_rD91ORIGk", 
            ID_THU_MUC_LUU: "1ZMwNvtDHfyRP73CWEDMh8xfQ-mGZ2e6h" 
        }
    }
};

/**
 * Hàm kiểm tra quyền của Account
 */
function kiemTraQuyen(Account) {
    if (APP_CONFIG.PHAN_QUYEN_TAI_KHOAN.hasOwnProperty(Account)) {
        return APP_CONFIG.PHAN_QUYEN_TAI_KHOAN[Account];
    }
    return null;
}
