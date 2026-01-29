/**
 * @swagger
 * /api/header:
 *   get:
 *     summary: Get header data by theme
 *     tags: [Header]
 *     parameters:
 *       - in: query
 *         name: theme
 *         required: true
 *         schema:
 *           type: string
 *           enum: [ncore, renil]
 *         description: Website theme name
 *     responses:
 *       200:
 *         description: Header data
 *         content:
 *           application/json:
 *       404:
 *         description: Header not found
 */