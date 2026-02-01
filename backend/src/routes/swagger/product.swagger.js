/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all active products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successfully fetched product list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 page:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: Our Products
 *                     subtitle:
 *                       type: string
 *                       example: Explore our wide range of high-quality LED lighting solutions
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/products/{slug}:
 *   get:
 *     summary: Get product details by slug and theme
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: tube-lights
 *       - in: query
 *         name: theme
 *         required: false
 *         schema:
 *           type: string
 *           enum: [ncore, renil]
 *         example: ncore
 *     responses:
 *       200:
 *         description: Successfully fetched product detail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 theme:
 *                   type: string
 *                   example: ncore
 *                 product:
 *                   $ref: '#/components/schemas/ProductItem'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
