# Dr. Dipankar Bhattacharya - Personal Website

This repository contains the personal academic website for Dr. Dipankar Bhattacharya, featuring research work, publications, grants, teaching experience, and career milestones.

## Features

- **News Feed**: Chronological display of career milestones, publications, awards, and activities
- **Filtering**: Filter content by year (2004-2025) and category (Awards, Career, Grants, Teaching, Publication, Talk, Work, Xtras)
- **Responsive Design**: Mobile-friendly layout
- **Professional Profile**: Complete academic and professional information

## Deployment to GitHub Pages

Follow these steps to deploy your website:

### 1. Accept Xcode License (Required for macOS)

Before using git, you need to accept the Xcode license:

```bash
sudo xcodebuild -license accept
```

Enter your admin password when prompted.

### 2. Initialize Git Repository

```bash
cd /Volumes/Data/dips
git init
```

### 3. Add All Files

```bash
git add .
```

### 4. Create Initial Commit

```bash
git commit -m "Initial commit: Personal academic website"
```

### 5. Add Remote Repository

```bash
git remote add origin https://github.com/bhattner143/dips.git
```

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### 7. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/bhattner143/dips
2. Click on "Settings" in the repository menu
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your website will be published at: https://bhattner143.github.io/dips/

## Updating the Website

After making changes to your files:

```bash
git add .
git commit -m "Description of your changes"
git push
```

The website will automatically update within a few minutes.

## Structure

- `index.html` - Main homepage with profile and news feed
- `styles.css` - Website styling
- `script.js` - Filter functionality for news posts
- `posts-loader.js` - Loads content from separate HTML files
- `posts/` - Additional content pages (publications, grants, work)
- `Photo_profile/` - Profile images
- `Photo_group/` - Group and event photos
- `Images_publication/` - Publication-related images
- `images_conf/` - Conference images
- `Imperial/`, `HKU/` - Institution logos
- `CV_latex_source/` - LaTeX CV source files

## Contact

**Dr. Dipankar Bhattacharya, Ph.D.**  
Marie Skłodowska-Curie Fellow  
Dyson School, Imperial College London, UK  
Email: d.bhattacharya1@imperial.ac.uk

## License

© 2026 Dr. Dipankar Bhattacharya. All rights reserved.
