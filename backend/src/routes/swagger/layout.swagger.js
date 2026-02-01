/**
 * @swagger
 * /api/layout:
 *   get:
 *     summary: Get complete layout by theme
 *     description: Returns header, footer, menus, and dropdowns based on theme (CMS driven).
 *     tags: [Layout]
 *     parameters:
 *       - in: query
 *         name: theme
 *         required: false
 *         schema:
 *           type: string
 *           enum: [ncore, renil]
 *         description: Website theme name (default is ncore)
 *     responses:
 *       200:
 *         description: Layout data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 theme:
 *                   type: string
 *                   example: ncore
 *                 header:
 *                   type: object
 *                   properties:
 *                     logo:
 *                       type: string
 *                       example: /uploads/logo/ncore.png
 *                     title:
 *                       type: string
 *                       example: Ncore Electricals
 *                     menu:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           label:
 *                             type: string
 *                             example: Products
 *                           path:
 *                             type: string
 *                             example: /products
 *                     dropdowns:
 *                       type: object
 *                       properties:
 *                         brandSwitch:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               label:
 *                                 type: string
 *                                 example: Ncore
 *                               slug:
 *                                 type: string
 *                                 example: ncore
 *                         categories:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               label:
 *                                 type: string
 *                                 example: LED Lights
 *                               slug:
 *                                 type: string
 *                                 example: led-lights
 *                 footer:
 *                   type: object
 *                   properties:
 *                     brand:
 *                       type: object
 *                       properties:
 *                         logo:
 *                           type: string
 *                           example: /uploads/logo/ncore.png
 *                         title:
 *                           type: string
 *                           example: Ncore
 *                         subtitle:
 *                           type: string
 *                           example: Electrical Solutions
 *                     navigation:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           label:
 *                             type: string
 *                             example: About Us
 *                           path:
 *                             type: string
 *                             example: /about
 *                     social:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           icon:
 *                             type: string
 *                             example: facebook
 *                           url:
 *                             type: string
 *                             example: https://facebook.com/ncore
 *                     contact:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           icon:
 *                             type: string
 *                             example: phone
 *                           value:
 *                             type: string
 *                             example: +91 99999 99999
 *       404:
 *         description: Layout not found
 *       500:
 *         description: Server error
 */
