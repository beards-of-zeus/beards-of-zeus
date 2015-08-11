module.exports = React.createClass({
  displayName: "Nav",
  render: function() {
    return (
       <nav className="top-bar" data-topbar>
          <ul className="title-area">
             
            <li className="name">
              <h1>
                <a href="#">
                  Top Bar Title
                </a>
              </h1>
            </li>
            <li className="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
          </ul>
       
          <section className="top-bar-section">
             
            <ul className="right">
              <li className="divider"></li>
              <li className="has-dropdown">
                <a href="#">Main Item 1</a>
                <ul className="dropdown">
                  <li><label>Section Name</label></li>
                  <li className="has-dropdown">
                    <a href="#" className="">Has Dropdown, Level 1</a>
                    <ul className="dropdown">
                      <li><a href="#">Dropdown Options</a></li>
                      <li><a href="#">Dropdown Options</a></li>
                      <li><a href="#">Level 2</a></li>
                      <li><a href="#">Subdropdown Option</a></li>
                      <li><a href="#">Subdropdown Option</a></li>
                      <li><a href="#">Subdropdown Option</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li className="divider"></li>
                  <li><label>Section Name</label></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li className="divider"></li>
                  <li><a href="#">See all →</a></li>
                </ul>
              </li>
              <li className="divider"></li>
              <li><a href="#">Main Item 2</a></li>
              <li className="divider"></li>
              <li className="has-dropdown">
                <a href="#">Main Item 3</a>
                <ul className="dropdown">
                  <li><a href="#">Dropdown Option</a></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li><a href="#">Dropdown Option</a></li>
                  <li className="divider"></li>
                  <li><a href="#">See all →</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </nav>
      );
  }
});