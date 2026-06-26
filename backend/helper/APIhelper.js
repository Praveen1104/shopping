class APIHelper {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  serach() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["limit", "page", "keyword"];
    removeFields.forEach((key) => delete queryCopy[key]);
    console.log(queryCopy);
    this.query = this.query.find(queryCopy);
    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.query.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

export default APIHelper;
