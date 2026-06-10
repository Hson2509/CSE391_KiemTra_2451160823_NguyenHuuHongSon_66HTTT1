function ProductTable() {
  return (
    <div className=" py-4">
      <div className="col-lg-8">
        <div className="card card-custom p-4">
          <h4 className="fw-bold mb-1" style={{ fontSize: "1.25rem" }}>
            Danh sách sản phẩm
          </h4>
          <p className="text-muted small mb-4">
            Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
          </p>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "8%" }}>
                    STT
                  </th>
                  <th scope="col" style={{ width: "42%" }}>
                    Tên sản phẩm
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    Danh mục
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Giá
                  </th>
                  <th
                    scope="col"
                    style={{ width: "15%" }}
                    className="text-center"
                  >
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductTable;
