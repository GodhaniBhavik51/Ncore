/**
 * @swagger
 * /api/footer:
 *   get:
 *     summary: Get footer by theme
 *     tags: [Footer]
 *     parameters:
 *       - in: query
 *         name: theme
 *         required: true
 *         schema: { type: string, enum: [ncore, renil] }
 *     responses:
 *       200: { description: Footer data }
 */