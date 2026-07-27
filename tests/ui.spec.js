import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const screenshotDir = path.join(process.cwd(), 'tests', 'screenshots')

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true })
})

test.describe('Portfolio UI', () => {
  test('hero, projects, and skills render correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.locator('.hero-name')).toBeVisible()
    await expect(page.locator('.hero-photo-frame > img')).toBeVisible()

    await expect(page.locator('.hero-cert-card .credly-badge-img')).toBeVisible()
    await expect(page.locator('.hero-cert-name')).toBeVisible()
    await expect(page.locator('.hero-cert-card')).toHaveAttribute('href', /credly\.com/)

    await expect(page.locator('.impact')).toBeVisible()
    await expect(page.locator('.impact-stat')).toHaveCount(5)

    await page.locator('#projects').scrollIntoViewIfNeeded()
    await page.waitForTimeout(800)

    await expect(page.locator('#projects .section-title')).toBeVisible()
    await expect(page.locator('.project-card')).toHaveCount(13)
    await expect(page.locator('.project-image')).toHaveCount(0)

    await page.locator('.filter-pill', { hasText: 'AI / Agents' }).click()
    await expect(page.locator('.project-card')).toHaveCount(2)

    await page.locator('.filter-pill', { hasText: 'All' }).click()
    await expect(page.locator('.project-card')).toHaveCount(13)

    await page.locator('#skills').scrollIntoViewIfNeeded()
    await expect(page.locator('.certs-row .credly-badge-img')).toBeVisible()
    await expect(page.locator('.project-link', { hasText: 'Code' })).toHaveCount(0)
  })

  test('project cards use terminal chrome layout', async ({ page }) => {
    await page.goto('/#projects')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(600)

    await expect(page.locator('.card-chrome').first()).toBeVisible()
    await expect(page.locator('.project-content').first()).toBeVisible()
    await expect(page.locator('.project-image')).toHaveCount(0)
  })
})
