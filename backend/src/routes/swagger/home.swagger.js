/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page APIs
 */

/**
 * @swagger
 * /api/home/hero-banner:
 *   get:
 *     summary: Get hero banner by brand
 *     description: Returns hero banner data based on brand (ncore or renil)
 *     tags: [Home]
 *     parameters:
 *       - in: query
 *         name: theme
 *         required: false
 *         schema:
 *           type: string
 *           enum: [ncore, renil]
 *           default: ncore
 *         description: Brand theme name
 *     responses:
 *       200:
 *         description: Hero banner data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     brand:
 *                       type: string
 *                       example: ncore
 *                     title:
 *                       type: string
 *                       example: Powering Smart Living
 *                     highlightText:
 *                       type: string
 *                       example: with LED Innovation
 *                     description:
 *                       type: string
 *                       example: High-quality LED lighting solutions
 *                     primaryButton:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           example: View Products
 *                         link:
 *                           type: string
 *                           example: /products
 *                     secondaryButton:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           example: Contact Us
 *                         link:
 *                           type: string
 *                           example: /contact
 *                     image:
 *                       type: string
 *                       example: heroBannerNcore
 *       404:
 *         description: Hero banner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Hero banner not found
 *       500:
 *         description: Internal server error
 */
