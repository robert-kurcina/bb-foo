import React, { Component } from "react";
import { FormControl, Button } from "react-bootstrap";
import ClipboardButton from "react-clipboard.js";

import thumbGroupInvite from "./images/icon.mail.bb.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "", group: "" };

    this.generateLink = this.generateLink.bind(this);
    this.changeGroup = this.changeGroup.bind(this);
    this.sendLinkCommand = this.sendLinkCommand.bind(this);
  }

  componentDidMount() {
    this.setState({ group: "B1 & B2 Managed" });
    this.generateLink();
  }

  generateLink(event) {
    let home = "https://secure.test.blaze/g/";
    let val = Math.random();
    let result = `${home}${val}`;

    this.setState({ url: result });

    if (event) {
      event.preventDefault();
    }
  }

  sendLinkCommand(event) {
    alert(
      `Sending Email to:\n\n GROUP "${this.state.group}"\n URL "${this.state
        .url}"`
    );

    event.preventDefault();
  }

  changeGroup(event, value) {
    this.setState({ group: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 className="invite-and-approve-title">Invite & Approve</h1>
        <div className="input-group">
          <span className="input-group-addon">Group</span>
          <select
            id="group-select"
            className="selectpicker form-control"
            data-live-search="true"
            title="Select group ..."
            onChange={this.changeGroup}
          >
            <option>B1 & B2 Managed</option>
            <option>B3 & B4 Managed</option>
            <option>B5 & B6 Managed</option>
            <option>All Managed</option>
          </select>
        </div>
        <section className="section-field">
          <img
            className="thumb-group-invite"
            src={thumbGroupInvite}
            alt="Group Invite Link"
          />
          <h3 className="group-invite-title">Group Invite Link</h3>

          <ClipboardButton
            component="a"
            button-href="#"
            className="copy-link-command a-link disable-select"
            data-clipboard-text={this.state.url}
          >
            Copy Invite Link to Clipboard
          </ClipboardButton>

          <div className="padded-wrapper">
            <FormControl
              id="clipboardUrl"
              type="text"
              className="clipboard-url"
              value={this.state.url}
              title={this.state.url}
            />
            <div className="instruction-main gray-text">
              Feel free to: send it, post it, tweet it (<a
                className="a-link disable-select"
                onClick={this.generateLink}
              >
                Generate new link and delete old
              </a>)
            </div>
          </div>
          <div className="instruction-or">&mdash; Or &mdash;</div>
          <Button
            type="button"
            className="btn btn-lg clean-button"
            onClick={this.sendLinkCommand}
          >
            Send Invite Emails
          </Button>
        </section>
      </div>
    );
  }
}

export default App;
