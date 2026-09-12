function toPlain(entry, path) {
  var value = path.length === 1 ? entry.get(path[0]) : entry.getIn(path);
  return value ? value.toJS() : null;
}

var AdmissionsPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var process = toPlain(entry, ["data", "process"]) || [];
    var requirements = toPlain(entry, ["data", "requirements"]) || [];
    var freeShs = toPlain(entry, ["data", "freeShs"]) || [];
    var keyDates = toPlain(entry, ["data", "keyDates"]) || [];
    var faqs = toPlain(entry, ["data", "faqs"]) || [];

    return h(
      "div",
      {},
      h(
        "div",
        { className: "preview-section" },
        h("div", { className: "preview-eyebrow" }, "Admissions"),
        h("h1", {}, "Admission Process"),
      ),
      h(
        "div",
        { className: "preview-section" },
        h("h2", {}, "Steps"),
        process.map(function (step, i) {
          return h(
            "div",
            { key: i, className: "preview-section" },
            h("strong", {}, "Step " + step.step + ": " + step.title),
            h("p", { className: "preview-muted" }, step.description),
          );
        }),
      ),
      h(
        "div",
        { className: "preview-section" },
        h("h2", {}, "Requirements"),
        h(
          "ul",
          {},
          requirements.map(function (item, i) {
            return h("li", { key: i }, item);
          }),
        ),
      ),
      h(
        "div",
        { className: "preview-section" },
        h("h2", {}, "Free SHS Benefits"),
        h(
          "ul",
          {},
          freeShs.map(function (item, i) {
            return h("li", { key: i }, item);
          }),
        ),
      ),
      h(
        "div",
        { className: "preview-section" },
        h("h2", {}, "Key Dates"),
        keyDates.map(function (d, i) {
          return h("div", { key: i, className: "preview-section" }, h("span", { className: "preview-badge" }, d.value), " " + d.label);
        }),
      ),
      h(
        "div",
        { className: "preview-section" },
        h("h2", {}, "FAQs"),
        faqs.map(function (f, i) {
          return h(
            "div",
            { key: i, className: "preview-section" },
            h("strong", {}, f.question),
            h("p", { className: "preview-muted" }, f.answer),
          );
        }),
      ),
    );
  },
});

var KeyPhotosPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var getAsset = this.props.getAsset;
    var data = toPlain(entry, ["data"]) || {};
    var categories = Object.keys(data);

    return h(
      "div",
      {},
      h("h1", {}, "Key Photos"),
      h(
        "div",
        { className: "preview-grid" },
        categories.map(function (category) {
          var path = data[category];
          var src = path ? getAsset(path).toString() : "";
          return h(
            "figure",
            { key: category, className: "preview-photo" },
            src
              ? h("img", { src: src, alt: category })
              : h("div", { style: { height: "110px", background: "rgba(0,0,0,.05)" } }),
            h("figcaption", {}, category),
          );
        }),
      ),
    );
  },
});

var GalleryPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var getAsset = this.props.getAsset;
    var photos = toPlain(entry, ["data", "photos"]) || [];

    return h(
      "div",
      {},
      h("h1", {}, "Gallery"),
      h(
        "div",
        { className: "preview-grid" },
        photos.map(function (photo, i) {
          var src = photo.image ? getAsset(photo.image).toString() : "";
          return h(
            "figure",
            { key: photo.id || i, className: "preview-photo" },
            src
              ? h("img", { src: src, alt: photo.caption })
              : h("div", { style: { height: "110px", background: "rgba(0,0,0,.05)" } }),
            h(
              "figcaption",
              {},
              h("span", { className: "preview-badge" }, photo.imageCategory),
              " " + (photo.caption || ""),
            ),
          );
        }),
      ),
    );
  },
});

CMS.registerPreviewStyle("preview.css");
CMS.registerPreviewTemplate("admissions", AdmissionsPreview);
CMS.registerPreviewTemplate("stock-images", KeyPhotosPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
