function ProductForm() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card card-custom p-4">
            <h4 className="fw-bold mb-1" style={{ fontSize: "1.25rem" }}>
              Thêm sản phẩm mới
            </h4>
            <p className="text-muted small mb-4">
              Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Danh mục</label>
                <select className="form-select text-muted" defaultValue="">
                  <option value="" disabled>
                    -- Chọn danh mục --
                  </option>
                  <option value="1">Điện thoại</option>
                  <option value="2">Máy tính bảng</option>
                  <option value="3">Laptop</option>
                  <option value="4">Phụ kiện</option>
                  <option value="5">Tai nghe</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Giá</label>
                {/* SỬA: Thay thế thành thẻ tự đóng /> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập giá"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Trạng thái còn hàng</label>
                {/* SỬA: Dùng defaultValue="1" cho select thay vì selected ở option */}
                <select className="form-select" defaultValue="1">
                  <option value="1">Còn hàng</option>
                  <option value="2">Hết hàng</option>
                </select>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-submit flex-grow-1">
                  Thêm sản phẩm
                </button>
                <button type="reset" className="btn btn-reset">
                  Làm mới form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductForm;
