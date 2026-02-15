import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load and display the hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Agentic Lab - Home/);
    
    // Check hero heading
    await expect(page.getByRole('heading', { name: /Welcome to Agentic Lab/i })).toBeVisible();
    
    // Check snow canvas exists
    const snowCanvas = page.locator('#snow-container');
    await expect(snowCanvas).toBeVisible();
  });

  test('should have working tabs', async ({ page }) => {
    await page.goto('/');
    
    // Check first tab (Info) is visible by default
    await expect(page.getByRole('button', { name: 'Info' })).toBeVisible();
    
    // Click About tab
    await page.getByRole('button', { name: 'About' }).click();
    await expect(page.getByText(/Our Focus Areas/i)).toBeVisible();
    
    // Click W I P tab
    await page.getByRole('button', { name: 'W I P' }).click();
    await expect(page.getByText(/Coming Soon/i)).toBeVisible();
  });

  test('should have navigation with correct links', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation exists
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Socials' })).toBeVisible();
    
    // Click Socials link
    await page.getByRole('link', { name: 'Socials' }).click();
    await expect(page).toHaveURL('/socials');
  });
});

test.describe('Socials Page', () => {
  test('should display social buttons', async ({ page }) => {
    await page.goto('/socials');
    
    // Check page title
    await expect(page).toHaveTitle(/Agentic Lab - Socials/);
    
    // Check heading
    await expect(page.getByRole('heading', { name: /Agentic Lab.*Socials/i })).toBeVisible();
    
    // Check social buttons exist
    await expect(page.getByRole('link', { name: /Instagram/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Telegram Channel/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Discord/i })).toBeVisible();
  });

  test('should have gradient button styling', async ({ page }) => {
    await page.goto('/socials');
    
    // Check button wrapper has correct classes
    const button = page.locator('button').first();
    await expect(button).toHaveClass(/p-\[3px\]/);
  });
});

test.describe('Mobile Responsiveness', () => {
  test('should show mobile menu button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile menu button should be visible
    const mobileMenuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Click mobile menu button
    const mobileMenuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await mobileMenuButton.click();
    
    // Mobile menu should appear
    // Note: Adjust selector based on actual implementation
    const mobileMenu = page.locator('div.md\\:hidden').last();
    await expect(mobileMenu).not.toHaveClass(/hidden/);
  });

  test('should have responsive tabs layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Tabs should be in row layout on mobile
    const tabButtons = page.locator('#tab-buttons');
    await expect(tabButtons).toHaveClass(/flex-row/);
  });
});

test.describe('Visual Elements', () => {
  test('should have stone color theme', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation has stone-600 background
    const nav = page.locator('nav').first();
    await expect(nav).toHaveClass(/bg-stone-600/);
  });

  test('should display scroll to top button after scrolling', async ({ page }) => {
    await page.goto('/');
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Wait a bit for the button to appear
    await page.waitForTimeout(100);
    
    // Scroll to top button should be visible
    const scrollButton = page.getByRole('button', { name: /Scroll to top/i });
    await expect(scrollButton).toBeVisible();
  });
});
