import React, { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import AnalyticsChart from "../components/AnalyticsChart";
import { Container, Row, Col, Card, Table, Button, Modal, Form } from "react-bootstrap";
import TotalAnalyticsChart from "../components/TotalAnalyticsChart";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection

function Dashboard() {
  const [myUrls, setMyUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [copiedId, setCopiedId] = useState(null); // 👈 track copied row

  const navigate = useNavigate(); // Use navigate to redirect

  // Fetch shortened URLs
  const fetchMyUrls = async () => {
    setLoading(true);
    try {
      const res = await API.get("/urls/myurls");
      setMyUrls(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch URLs");
    } finally {
      setLoading(false);
    }
  };

  // Handle URL shortening
  const handleShorten = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/urls/shorten", { originalUrl: newUrl });
      setMyUrls((prev) => [...prev, res.data]);
      setShowModal(false);
      setNewUrl("");
      toast.success("URL shortened successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to shorten URL");
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Redirect to login page and force a page reload
    navigate("/login");
    window.location.reload(); // Reload the page to reset the state properly
  };

  useEffect(() => {
    fetchMyUrls();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Welcome back to your dashboard!</h2>
      {/* Logout Button */}
      <Button variant="danger" onClick={handleLogout} className="mb-3">
        Logout
      </Button>

      <TotalAnalyticsChart /> {/* Total analytics chart */}

      <Row className="my-4">
        <Col>
          <h2>My Shortened URLs</h2>
        </Col>
        <Col className="text-end">
          <Button onClick={() => setShowModal(true)}>Create New URL</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          {loading ? (
            <p>Loading...</p>
          ) : myUrls.length === 0 ? (
            <p>No URLs found</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Original URL</th>
                  <th>Short URL</th>
                  <th>Copy</th>
                  <th>Clicks</th>
                  <th>Created Date</th>
                  <th>Analytics</th>
                </tr>
              </thead>
              <tbody>
                {myUrls.map((url, idx) => {
                  const fullShortUrl = `https://shortify-platform-2.onrender.com/${url.shortUrl}`;
                  return (
                    <tr key={url.id}>
                      <td>{idx + 1}</td>
                      <td>{url.originalUrl}</td>
                      <td>
                        <a href={fullShortUrl} target="_blank" rel="noreferrer">
                          {url.shortUrl}
                        </a>
                      </td>
                      <td>
                        <Button
                          variant={copiedId === url.id ? "success" : "outline-secondary"}
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(fullShortUrl);
                            setCopiedId(url.id);
                            toast.success("Short URL copied!");
                            setTimeout(() => setCopiedId(null), 4000);
                          }}
                        >
                          {copiedId === url.id ? "Copied!" : "Copy"}
                        </Button>
                      </td>
                      <td>{url.clickCount}</td>
                      <td>{new Date(url.createdDate).toLocaleString()}</td>
                      <td>
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => setSelectedUrl(url.shortUrl)}
                        >
                          View Analytics
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>

      {/* Analytics Modal */}
      <Modal show={!!selectedUrl} onHide={() => setSelectedUrl(null)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Analytics for {selectedUrl}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUrl && <AnalyticsChart shortUrl={selectedUrl} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedUrl(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Create URL Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Shortened URL</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleShorten}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Original URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Shorten URL
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default Dashboard;
