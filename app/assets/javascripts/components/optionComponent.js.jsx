'use strict';

class OptionComponent extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('goBack', 'handleDownload')
  }

  goBack() {
    this.props.onBacktoCategory()
  }

  handleDownload(event) {
    event.preventDefault()
    var templateTitle = this.props.template.title
    var id = this.props.template.id
    if (confirm('Download ' + templateTitle + ' Template?')) {
      // window.location.href = "/public/system/templates/images/000/000/017/original/FlexboxCompatability.PNG"
      $.ajax({
        method: 'GET',
        url: '/templates/' + id + '/file_send',
        success: () => {
          this.goBack()
        }
      })
    }
  }

  render() {
    var fileDownloadURL = "/templates/" + this.props.template.id + "/file_send"
    return(
      <div className="container-main">
      <span className="glyphicon glyphicon-arrow-left pull-left" onClick={this.goBack}>BACK</span>
      <div className="container-box">
        <div className="parent">
          <div className="item"></div>
          <div className="item"><h1 className="startingQ">{this.props.template.title} Template</h1></div>
          <div className="item"></div>
        </div>
        <div className="parent4">
          <div className="item4"></div>
          <div className="item4 categories">
            <ul className="list-group"></ul>
              <div className="btn-group">
                <a className="categoryButtonLink" href={fileDownloadURL}>I have Photoshop</a>
                <button className="categoryButton">I don't have Photoshop</button>
              </div>
          </div>
          <div className="item4"></div>
        </div>
      </div>
    </div>
    )
  }
}
