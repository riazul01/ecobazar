import { useState } from "react";
import { useParams, Link as RouterLink } from "react-router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { alpha } from "@mui/material/styles";
import Breadcrumb, { type BreadcrumbItem } from "components/common/BreadCrumb";
import Filters from "components/sections/blog/filters";
import FiltersDrawer from "components/common/FiltersDrawer";
import SectionWrapper from "components/sections/SectionWrapper";
import FilterIcon from "components/icons/FilterIcon";
import Iconify from "components/base/Iconify";
import Image from "components/base/Image";
import { useBreakpoints } from "providers/BreakpointProvider";
import { blogs, type Blog } from "data/blogs";
import { paths } from "routes/paths";

import User1 from "assets/profiles/user1.webp";
import User2 from "assets/profiles/user2.webp";
import User3 from "assets/profiles/user3.webp";
import User4 from "assets/profiles/user4.webp";
import User5 from "assets/profiles/user5.webp";
import User6 from "assets/profiles/user6.webp";
import VegetablesBg from "assets/backgrounds/blog-banner.webp";
import Banner from "components/common/Banner";

interface ArticleComment {
  id: string | number;
  name: string;
  avatar: string;
  date: string;
  comment: string;
}

const defaultCommentsList: ArticleComment[] = [
  {
    id: 1,
    name: "Annette Black",
    avatar: User1,
    date: "26 Apr, 2021",
    comment:
      "This guide completely transformed how I shop for fresh fruits and vegetables. Paying closer attention to organic labels and whole foods has made such a positive impact on my family's weekly meals!",
  },
  {
    id: 2,
    name: "Devon Lane",
    avatar: User2,
    date: "24 Apr, 2021",
    comment:
      "Extremely well-written and practical advice. The tip about checking ingredient lists by weight order really opened my eyes. Highly recommended reading for anyone wanting to eat cleaner.",
  },
  {
    id: 3,
    name: "Jacob Jones",
    avatar: User3,
    date: "20 Apr, 2021",
    comment:
      "Great insights on sustainable eating and seasonal produce. Looking forward to trying out these meal prepping techniques this weekend!",
  },
  {
    id: 4,
    name: "Jane Cooper",
    avatar: User4,
    date: "18 Apr, 2021",
    comment:
      "The section on balanced nutrition and mindful grocery shopping was so helpful. Ecobazar's fresh produce selection makes following these tips so much easier.",
  },
  {
    id: 5,
    name: "Darrell Steward",
    avatar: User5,
    date: "7 Apr, 2021",
    comment:
      "Very informative article! Simple, actionable steps that anyone can incorporate into their daily healthy living routine.",
  },
];

const BlogDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { downLg } = useBreakpoints();

  const currentBlog: Blog =
    blogs.find((b) => String(b.id) === String(id)) || blogs[0];

  // Initial comments from blog or default real comments
  const initialComments: ArticleComment[] =
    currentBlog.commentsList && currentBlog.commentsList.length > 0
      ? [
          ...currentBlog.commentsList.map((c) => ({
            id: c.id,
            name: c.name,
            avatar: c.avatar || User1,
            date: c.date,
            comment: c.comment,
          })),
          ...defaultCommentsList,
        ]
      : defaultCommentsList;

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [comments, setComments] = useState<ArticleComment[]>(initialComments);
  const [visibleCount, setVisibleCount] = useState(5);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { id: 1, icon: "mdi-light:home", link: paths.home },
    { id: 2, title: "Blog", link: paths.blog },
    { id: 3, title: "Blog Details", active: true },
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) return;

    const newComment: ArticleComment = {
      id: Date.now(),
      name: fullName.trim(),
      avatar: User6,
      date: "Just now",
      comment: message.trim(),
    };

    setComments([newComment, ...comments]);
    setFullName("");
    setEmail("");
    setMessage("");
    setToastMessage("Comment submitted successfully!");
    setToastOpen(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastMessage("Blog link copied to clipboard!");
    setToastOpen(true);
  };

  const handleLoadMore = () => {
    if (visibleCount >= comments.length) {
      setToastMessage("All comments loaded!");
      setToastOpen(true);
    } else {
      setVisibleCount((prev) => prev + 5);
    }
  };

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <SectionWrapper
        component={Stack}
        sx={{
          py: { xs: 3, md: 5 },
          gap: { xs: 4, lg: 5 },
          alignItems: "flex-start",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        {/* Main Blog Article Section */}
        <Box sx={{ flex: 1, minWidth: 0, width: 1 }}>
          {/* Mobile Filter Button */}
          {downLg && (
            <Button
              variant="contained"
              size="medium"
              endIcon={<FilterIcon />}
              onClick={toggleDrawer}
              sx={{ mb: 3 }}
            >
              Filter
            </Button>
          )}

          {/* Featured Hero Image */}
          <Box
            sx={{
              width: 1,
              height: { xs: 260, sm: 380, md: 460 },
              borderRadius: 2.5,
              overflow: "hidden",
              mb: 3,
            }}
          >
            <Image
              src={currentBlog.image}
              alt={currentBlog.title}
              sx={{
                width: 1,
                height: 1,
                objectFit: "cover",
                borderRadius: 2.5,
              }}
            />
          </Box>

          {/* Meta Info Bar 1 */}
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: 1,
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
              <Iconify
                icon="ph:tag"
                sx={{ color: "primary.main", fontSize: 18 }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {currentBlog.category || "Food"}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
              <Iconify
                icon="ant-design:user-outlined"
                sx={{ color: "primary.main", fontSize: 18 }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                By {currentBlog.author || "Admin"}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
              <Iconify
                icon="bytesize:message"
                sx={{ color: "primary.main", fontSize: 18 }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {currentBlog.comments || 65} Comments
              </Typography>
            </Stack>
          </Stack>

          {/* Article Main Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2.125rem" },
              lineHeight: 1.35,
              mb: 2.5,
            }}
          >
            {currentBlog.title}
          </Typography>

          {/* Author Info & Social Share Row */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              pb: 3,
              mb: 3,
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            {/* Author Profile */}
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Avatar
                src={currentBlog.authorAvatar || User6}
                alt={currentBlog.author}
                sx={{ width: 44, height: 44 }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  {currentBlog.author || "Cameron Williamson"}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {currentBlog.publishDate || "4 April, 2021"} •{" "}
                  {currentBlog.readTime || "6 min read"}
                </Typography>
              </Box>
            </Stack>

            {/* Social Share Icons - Soft Variant with No Hover Effects */}
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                disableRipple
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "grey.100",
                  color: "text.secondary",
                  transition: "none",
                  "&:hover": {
                    bgcolor: "grey.100",
                    color: "text.secondary",
                  },
                }}
              >
                <Iconify icon="ri:facebook-fill" sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                disableRipple
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "grey.100",
                  color: "text.secondary",
                  transition: "none",
                  "&:hover": {
                    bgcolor: "grey.100",
                    color: "text.secondary",
                  },
                }}
              >
                <Iconify icon="ri:twitter-x-fill" sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                disableRipple
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "grey.100",
                  color: "text.secondary",
                  transition: "none",
                  "&:hover": {
                    bgcolor: "grey.100",
                    color: "text.secondary",
                  },
                }}
              >
                <Iconify icon="bi:pinterest" sx={{ fontSize: 17 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                disableRipple
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "grey.100",
                  color: "text.secondary",
                  transition: "none",
                  "&:hover": {
                    bgcolor: "grey.100",
                    color: "text.secondary",
                  },
                }}
              >
                <Iconify icon="ri:instagram-line" sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                onClick={handleCopyLink}
                size="small"
                title="Copy Link"
                disableRipple
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "grey.100",
                  color: "text.secondary",
                  transition: "none",
                  "&:hover": {
                    bgcolor: "grey.100",
                    color: "text.secondary",
                  },
                }}
              >
                <Iconify icon="solar:link-linear" sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Stack>

          {/* Article Subheading */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              fontSize: { xs: "1rem", sm: "1.0625rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {currentBlog.desc ||
              "Discover essential guidance on clean nutrition, mindful grocery shopping, and wholesome culinary practices for optimal health."}
          </Typography>

          {/* Paragraph 1 */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: "0.9375rem",
              mb: 2,
            }}
          >
            {currentBlog.content?.[0] ||
              "Making conscious food choices starts with understanding where your ingredients originate and how they nourish your body. Opting for organically certified, seasonally harvested produce guarantees maximum natural flavor and nutrient density in every dish."}
          </Typography>

          {/* Paragraph 2 */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: "0.9375rem",
              mb: 3,
            }}
          >
            {currentBlog.content?.[1] ||
              "Building wholesome grocery habits empowers you to prepare balanced meals that provide sustained energy throughout the day. Prioritizing whole foods with minimal processing supports digestive health and overall metabolic wellness."}
          </Typography>

          {/* Two Images Side by Side */}
          <Grid container spacing={2.5} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  height: { xs: 220, sm: 260 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh Oranges"
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  height: { xs: 220, sm: 260 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh Fruit Platter"
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Paragraph 3 */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: "0.9375rem",
              mb: 3.5,
            }}
          >
            {currentBlog.content?.[2] ||
              "Incorporating fresh herbs, colorful greens, and antioxidant-rich fruits into your weekly pantry creates a vibrant, flavorful foundation for everyday wellness."}
          </Typography>

          {/* Additional Content Paragraphs if available */}
          {currentBlog.content && currentBlog.content.length > 3 && (
            <Stack spacing={2} sx={{ mb: 3.5 }}>
              {currentBlog.content.slice(3).map((para, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "0.9375rem",
                  }}
                >
                  {para}
                </Typography>
              ))}
            </Stack>
          )}

          {/* Summer Sales Promo Banner */}
          <Banner
            bgImage={VegetablesBg}
            sx={{
              mb: 5,
              px: 7,
              py: 8,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <div>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                Summer Sale
              </Typography>

              <Typography
                variant="h3"
                sx={{ mt: 1, letterSpacing: 0.5, color: "common.white" }}
              >
                Fresh Fruit
              </Typography>

              <Button
                component={RouterLink}
                to={paths.shop}
                variant="contained"
                size="medium"
                endIcon={<Iconify icon="fluent:arrow-right-32-filled" />}
                sx={{ mt: 2 }}
              >
                Shop now
              </Button>
            </div>

            <Stack
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                bgcolor: (theme) => alpha(theme.palette.warning.main, 0.075),
                color: "common.white",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: 11,
                  color: "grey.400",
                  textTransform: "uppercase",
                }}
              >
                UP TO
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "warning.main", fontWeight: 500 }}
              >
                56%
              </Typography>
              <Typography variant="caption" sx={{ color: "grey.400" }}>
                OFF
              </Typography>
            </Stack>
          </Banner>

          {/* Leave a Comment Form */}
          <Box component="form" onSubmit={handleCommentSubmit} sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "text.primary", mb: 2.5 }}
            >
              Leave a Comment
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "text.primary", mb: 0.75 }}
                >
                  Full Name
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  placeholder="Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "text.primary", mb: 0.75 }}
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  variant="filled"
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
            </Grid>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "text.primary", mb: 0.75 }}
              >
                Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="filled"
                placeholder="Write your comment here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Save my name and email in this browser for the next time I
                  comment.
                </Typography>
              }
              sx={{ mb: 2.5 }}
            />

            <Box>
              <Button type="submit" variant="contained" color="primary">
                Post Comments
              </Button>
            </Box>
          </Box>

          {/* Comments List Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "text.primary", mb: 3 }}
            >
              Comments
            </Typography>

            <Stack direction="column" spacing={3}>
              {comments.slice(0, visibleCount).map((c, idx) => (
                <Box
                  key={c.id || idx}
                  sx={{
                    pb: 2.5,
                    borderBottom: idx < visibleCount - 1 ? 1 : 0,
                    borderColor: "divider",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.75}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <Avatar
                      src={c.avatar}
                      alt={c.name}
                      sx={{ width: 44, height: 44, flexShrink: 0 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", mb: 0.5 }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, color: "text.primary" }}
                        >
                          {c.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.disabled" }}
                        >
                          •
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          {c.date}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          fontSize: "0.875rem",
                        }}
                      >
                        {c.comment}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>

            {/* Load More Button */}
            <Box sx={{ mt: 3.5 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleLoadMore}
                sx={{
                  px: 4,
                }}
              >
                Load More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Sidebar Filter */}
        {!downLg && <Filters />}
      </SectionWrapper>

      {/* Mobile Filters Drawer */}
      <FiltersDrawer
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        width={{ xs: 320, sm: 400 }}
      >
        <Filters />
      </FiltersDrawer>

      {/* Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          sx={{ width: "100%", borderRadius: 2 }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BlogDetails;
